(function() {var implementors = {};
implementors["bittongue"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"bittongue/diagnostic/enum.Level.html\" title=\"enum bittongue::diagnostic::Level\">Level</a>","synthetic":true,"types":["bittongue::diagnostic::Level"]},{"text":"impl&lt;D:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"bittongue/diagnostic/struct.Diagnostics.html\" title=\"struct bittongue::diagnostic::Diagnostics\">Diagnostics</a>&lt;D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["bittongue::diagnostic::Diagnostics"]},{"text":"impl&lt;D:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"bittongue/diagnostic/struct.IntoIter.html\" title=\"struct bittongue::diagnostic::IntoIter\">IntoIter</a>&lt;D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["bittongue::diagnostic::IntoIter"]},{"text":"impl&lt;'diag, D:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"bittongue/diagnostic/struct.Iter.html\" title=\"struct bittongue::diagnostic::Iter\">Iter</a>&lt;'diag, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["bittongue::diagnostic::Iter"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"bittongue/source/struct.Location.html\" title=\"struct bittongue::source::Location\">Location</a>","synthetic":true,"types":["bittongue::source::location::Location"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"bittongue/source/struct.Reader.html\" title=\"struct bittongue::source::Reader\">Reader</a>","synthetic":true,"types":["bittongue::source::reader::Reader"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"bittongue/source/struct.Span.html\" title=\"struct bittongue::source::Span\">Span</a>","synthetic":true,"types":["bittongue::source::span::Span"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"bittongue/source/struct.SpanContent.html\" title=\"struct bittongue::source::SpanContent\">SpanContent</a>","synthetic":true,"types":["bittongue::source::span::SpanContent"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"bittongue/source/struct.Source.html\" title=\"struct bittongue::source::Source\">Source</a>","synthetic":true,"types":["bittongue::source::Source"]},{"text":"impl&lt;'src&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"bittongue/source/struct.SegmentIndices.html\" title=\"struct bittongue::source::SegmentIndices\">SegmentIndices</a>&lt;'src&gt;","synthetic":true,"types":["bittongue::source::SegmentIndices"]},{"text":"impl&lt;'src&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"bittongue/source/struct.NewlineIndices.html\" title=\"struct bittongue::source::NewlineIndices\">NewlineIndices</a>&lt;'src&gt;","synthetic":true,"types":["bittongue::source::NewlineIndices"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"bittongue/lexer/struct.LexingError.html\" title=\"struct bittongue::lexer::LexingError\">LexingError</a>","synthetic":true,"types":["bittongue::lexer::LexingError"]},{"text":"impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"bittongue/lexer/struct.TokenStream.html\" title=\"struct bittongue::lexer::TokenStream\">TokenStream</a>&lt;L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;L as <a class=\"trait\" href=\"bittongue/lexer/trait.Lexer.html\" title=\"trait bittongue::lexer::Lexer\">Lexer</a>&gt;::<a class=\"type\" href=\"bittongue/lexer/trait.Lexer.html#associatedtype.Token\" title=\"type bittongue::lexer::Lexer::Token\">Token</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["bittongue::lexer::TokenStream"]}];
implementors["unicode_segmentation"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"unicode_segmentation/struct.GraphemeIndices.html\" title=\"struct unicode_segmentation::GraphemeIndices\">GraphemeIndices</a>&lt;'a&gt;","synthetic":true,"types":["unicode_segmentation::grapheme::GraphemeIndices"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"unicode_segmentation/struct.Graphemes.html\" title=\"struct unicode_segmentation::Graphemes\">Graphemes</a>&lt;'a&gt;","synthetic":true,"types":["unicode_segmentation::grapheme::Graphemes"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"unicode_segmentation/struct.GraphemeCursor.html\" title=\"struct unicode_segmentation::GraphemeCursor\">GraphemeCursor</a>","synthetic":true,"types":["unicode_segmentation::grapheme::GraphemeCursor"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"unicode_segmentation/enum.GraphemeIncomplete.html\" title=\"enum unicode_segmentation::GraphemeIncomplete\">GraphemeIncomplete</a>","synthetic":true,"types":["unicode_segmentation::grapheme::GraphemeIncomplete"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"unicode_segmentation/struct.UnicodeWords.html\" title=\"struct unicode_segmentation::UnicodeWords\">UnicodeWords</a>&lt;'a&gt;","synthetic":true,"types":["unicode_segmentation::word::UnicodeWords"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"unicode_segmentation/struct.UnicodeWordIndices.html\" title=\"struct unicode_segmentation::UnicodeWordIndices\">UnicodeWordIndices</a>&lt;'a&gt;","synthetic":true,"types":["unicode_segmentation::word::UnicodeWordIndices"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"unicode_segmentation/struct.UWordBounds.html\" title=\"struct unicode_segmentation::UWordBounds\">UWordBounds</a>&lt;'a&gt;","synthetic":true,"types":["unicode_segmentation::word::UWordBounds"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"unicode_segmentation/struct.UWordBoundIndices.html\" title=\"struct unicode_segmentation::UWordBoundIndices\">UWordBoundIndices</a>&lt;'a&gt;","synthetic":true,"types":["unicode_segmentation::word::UWordBoundIndices"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"unicode_segmentation/struct.UnicodeSentences.html\" title=\"struct unicode_segmentation::UnicodeSentences\">UnicodeSentences</a>&lt;'a&gt;","synthetic":true,"types":["unicode_segmentation::sentence::UnicodeSentences"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"unicode_segmentation/struct.USentenceBounds.html\" title=\"struct unicode_segmentation::USentenceBounds\">USentenceBounds</a>&lt;'a&gt;","synthetic":true,"types":["unicode_segmentation::sentence::USentenceBounds"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"unicode_segmentation/struct.USentenceBoundIndices.html\" title=\"struct unicode_segmentation::USentenceBoundIndices\">USentenceBoundIndices</a>&lt;'a&gt;","synthetic":true,"types":["unicode_segmentation::sentence::USentenceBoundIndices"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()