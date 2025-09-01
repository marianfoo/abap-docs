  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756.htm) → 

String Processing in Release 7.56

[1\. XPath and XSD Regular Expressions](#!ABAP_MODIFICATION_1@1@)
[2\. Callouts in PCRE Regular Expressions](#!ABAP_MODIFICATION_2@2@)

Modification 1   

XPath and XSD Regular Expressions

Besides the existing support of [PCRE regular expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpcre_regex_glosry.htm "Glossary Entry") and [POSIX regular expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenposix_regex_glosry.htm "Glossary Entry") (obsolete) ABAP supports now also [XPath regular expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenxpath_regex_glosry.htm "Glossary Entry") and [XSD regular expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenxsd_regex_glosry.htm "Glossary Entry"). Internally, those are transformed to PCRE regular expressions and processed by the PCRE2 Library.

-   Both kinds of regular expressions can be used by the new (factory) methods CREATE\_XPATH2 and CREATE\_XSD of the [system classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_system_classes.htm) CL\_ABAP\_REGEX and CL\_ABAP\_MATCHER.
-   XPath regular expressions can be used by the new argument [xpath](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_regex.htm) in some built-in functions.

Modification 2   

Callouts in PCRE Regular Expressions

The class [CL\_ABAP\_MATCHER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_system_classes.htm) supports callouts in [PCRE syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax.htm) now. The method SET\_CALLOUT can be used to register a handler class that implements the interface IF\_ABAP\_MATCHER\_CALLOUT. The [special characters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenregex_pcre_syntax_specials.htm) (?C...) of a PCRE regular expression then call the interface method CALLOUT when the method MATCH is executed.