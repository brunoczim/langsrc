use std::{cmp::Ordering, mem, rc::Rc, sync::Arc};
use unicode_segmentation::UnicodeSegmentation;

#[repr(transparent)]
#[derive(Debug, Eq, Ord, Hash)]
pub struct GraphemeCluster {
    content: str,
}

impl<T> PartialEq<T> for GraphemeCluster
where
    T: AsRef<str> + ?Sized,
{
    fn eq(&self, other: &T) -> bool {
        self.as_str() == other.as_ref()
    }
}

impl PartialEq<GraphemeCluster> for str {
    fn eq(&self, other: &GraphemeCluster) -> bool {
        self == other.as_str()
    }
}

impl<T> PartialOrd<T> for GraphemeCluster
where
    T: AsRef<str> + ?Sized,
{
    fn partial_cmp(&self, other: &T) -> Option<Ordering> {
        self.as_str().partial_cmp(other.as_ref())
    }
}

impl PartialOrd<GraphemeCluster> for str {
    fn partial_cmp(&self, other: &GraphemeCluster) -> Option<Ordering> {
        self.partial_cmp(other.as_str())
    }
}

impl AsRef<str> for GraphemeCluster {
    fn as_ref(&self) -> &str {
        self.as_str()
    }
}

impl<'grapheme> From<&'grapheme GraphemeCluster> for Box<GraphemeCluster> {
    fn from(grapheme: &'grapheme GraphemeCluster) -> Self {
        unsafe { mem::transmute(Box::<str>::from(grapheme.as_str())) }
    }
}

impl<'grapheme> From<&'grapheme GraphemeCluster> for Rc<GraphemeCluster> {
    fn from(grapheme: &'grapheme GraphemeCluster) -> Self {
        unsafe { mem::transmute(Rc::<str>::from(grapheme.as_str())) }
    }
}

impl<'grapheme> From<&'grapheme GraphemeCluster> for Arc<GraphemeCluster> {
    fn from(grapheme: &'grapheme GraphemeCluster) -> Self {
        unsafe { mem::transmute(Arc::<str>::from(grapheme.as_str())) }
    }
}

impl GraphemeCluster {
    pub(crate) fn new_unchecked(content: &str) -> &Self {
        unsafe { mem::transmute(content) }
    }

    pub fn new(content: &str) -> Option<&Self> {
        let mut iter = content.graphemes(true);
        if iter.next().is_some() && iter.next().is_none() {
            Some(Self::new_unchecked(content))
        } else {
            None
        }
    }

    pub fn as_str(&self) -> &str {
        &self.content
    }

    pub fn len(&self) -> usize {
        self.as_str().len()
    }

    pub fn has_diacritics(&self) -> bool {
        let mut iter = self.as_str().chars();
        iter.next();
        iter.next().is_some()
    }

    pub fn strip_diacritics(&self) -> char {
        self.as_str().chars().next().unwrap()
    }

    pub fn is_char(&self) -> bool {
        self.to_char().is_some()
    }

    pub fn to_char(&self) -> Option<char> {
        let mut iter = self.as_str().chars();
        iter.next().filter(|_| iter.next().is_none())
    }

    pub fn is_alphabetic(&self) -> bool {
        self.strip_diacritics().is_whitespace()
    }

    pub fn is_alphabetic_char(&self) -> bool {
        self.to_char().map_or(false, char::is_alphabetic)
    }

    pub fn is_numeric(&self) -> bool {
        self.strip_diacritics().is_numeric()
    }

    pub fn is_numeric_char(&self) -> bool {
        self.to_char().map_or(false, char::is_numeric)
    }

    pub fn is_alphanumeric(&self) -> bool {
        self.strip_diacritics().is_alphanumeric()
    }

    pub fn is_alphanumeric_char(&self) -> bool {
        self.to_char().map_or(false, char::is_alphanumeric)
    }

    pub fn is_digit(&self, base: u32) -> bool {
        self.strip_diacritics().is_digit(base)
    }

    pub fn is_digit_char(&self, base: u32) -> bool {
        self.to_char().map_or(false, |ch| ch.is_digit(base))
    }

    pub fn to_digit(&self, base: u32) -> Option<u32> {
        self.strip_diacritics().to_digit(base)
    }

    pub fn char_to_digit(&self, base: u32) -> Option<u32> {
        self.to_char().and_then(|ch| ch.to_digit(base))
    }

    pub fn is_whitespace(&self) -> bool {
        self.strip_diacritics().is_whitespace()
    }

    pub fn is_whitespace_char(&self) -> bool {
        self.to_char().map_or(false, char::is_whitespace)
    }
}
