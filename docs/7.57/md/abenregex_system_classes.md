  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [Regular Expressions (regex)](javascript:call_link\('abenregular_expressions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: regex - System Classes, ABENREGEX_SYSTEM_CLASSES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

regex - System Classes

The system classes for regular expressions are CL\_ABAP\_REGEX and CL\_ABAP\_MATCHER. Both are documented in the class library.

-   [CL\_ABAP\_REGEX](#@@ITOC@@ABENREGEX_SYSTEM_CLASSES_1)
-   [CL\_ABAP\_MATCHER](#@@ITOC@@ABENREGEX_SYSTEM_CLASSES_2)

CL\_ABAP\_REGEX   

Factory methods of class CL\_ABAP\_REGEX create an object-oriented representation of a regular expression passed in a character-like field:

-   CREATE\_PCRE creates instances for regular expressions with [PCRE syntax](javascript:call_link\('abenregex_pcre_syntax.htm'\)).
-   CREATE\_XPATH2 creates instances for regular expressions with [XPath syntax](javascript:call_link\('abenregex_xpath_syntax.htm'\)).
-   CREATE\_XSD creates instances for regular expressions with [XSD syntax](javascript:call_link\('abenregex_xsd_syntax.htm'\)).
-   CREATE\_POSIX creates instances for regular expressions with [POSIX syntax](javascript:call_link\('abenregex_posix_syntax.htm'\)) (obsolete).

Optional parameters allow further specifications for handling the regular expression:

-   The Parameter EXTENDED for CREATE\_PCRE and CREATE\_XPATH2 switches the extended mode for compiling PCRE and XPath expressions. The default value is ABAP\_TRUE. In the extended mode, most unescaped whitespace (blanks and line breaks) of the pattern are ignored outside character classes and comments can be placed behind #. In order to include whitespace and # into a pattern, they must be escaped The extended mode can also be switched of with [(?-x)](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) in the regular expression.
-   The Parameter UNICODE\_HANDLING for CREATE\_PCRE and CREATE\_XPATH2 defines how characters from the [surrogate area](javascript:call_link\('abensurrogate_area_glosry.htm'\) "Glossary Entry") are handled.

Instances of CL\_ABAP\_REGEX can be used with the class CL\_ABAP\_MATCHER and with the addition REGEX of the statements [FIND](javascript:call_link\('abapfind.htm'\)) and [REPLACE](javascript:call_link\('abapreplace.htm'\)).

Hints

-   The class CL\_ABAP\_REGEX can also be instantiated with the operator [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) or the statement [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)), but this is deprecated. Such a direct instantiation of CL\_ABAP\_REGEX creates instances for regular expressions with [POSIX syntax](javascript:call_link\('abenregex_posix_syntax.htm'\)). Instead of direct instantiation, the above factory methods CREATE\_PCRE, CREATE\_POSIX, CREATE\_XPATH2 or CREATE\_XSD should be used.
-   Instances of CL\_ABAP\_REGEX for all kinds of regular expressions, PCRE, XPath, XSD and POSIX (obsolete) can be used with the addition REGEX of the statements [FIND](javascript:call_link\('abapfind.htm'\)) and [REPLACE](javascript:call_link\('abapreplace.htm'\)). This circumvents the restriction that regular expressions of XPath and XSD syntax cannot be specified directly as character strings.
-   Instances of CL\_ABAP\_REGEX cannot be used with the addition PCRE of the statements FIND and REPLACE.
-   Regular expressions in [POSIX syntax](javascript:call_link\('abenregex_posix_syntax.htm'\)) are obsolete. Using regular expressions in POSIX syntax leads to a warning from syntax check that can be hidden by the pragma ##regex\_posix. It is recommended that [regular expressions are migrated from POSIX to PCRE](javascript:call_link\('abenregex_migrating_posix.htm'\)) or another regular expression syntax supported by ABAP.

Executable Example

[Search for a regular expression](javascript:call_link\('abenregex_abexa.htm'\))

CL\_ABAP\_MATCHER   

The class CL\_ABAP\_MATCHER applies regular expressions to either a character string or an internal table. Its methods allow finding, replacing or matching regular expressions. Instances of CL\_ABAP\_MATCHER can be created either with factory methods of the class itself or with the method CREATE\_MATCHER of the class CL\_ABAP\_REGEX. The latter allows the use of the same regular expression multiple times for different texts.

The class CL\_ABAP\_MATCHER stores the current state of text processing. The current processing state can be queried using different GET\_... methods.

For [PCRE syntax](javascript:call_link\('abenregex_pcre_syntax.htm'\)), the class CL\_ABAP\_MATCHER supports callouts. With the method SET\_CALLOUT a handler class can be registered that implements the interface IF\_ABAP\_MATCHER\_CALLOUT. The [special characters](javascript:call_link\('abenregex_pcre_syntax_specials.htm'\)) (?C...) of a PCRE regular expression then call the interface method CALLOUT when the method MATCH is executed.

Hint

If a regular expression has to be used several times, it is preferable to work with objects of CL\_ABAP\_MATCHER created with CL\_ABAP\_REGEX.

Example

An object of CL\_ABAP\_MATCHER is created with the method CREATE\_MATCHER of an instance of the class CL\_ABAP\_REGEX that represents a regular expression with PCRE syntax. Depending on a successful match, the registered subgroups of submatches are received and displayed.

FINAL(matcher) =
  cl\_abap\_regex=>create\_pcre( pattern = '(\\d\\d\\d)(\\D\\D\\D)(\\d\\d\\d)'
                              ignore\_case = 'X'
              )->create\_matcher( text = '123abc456' ).
IF matcher->match( ).
  DO.
    TRY.
        cl\_demo\_output=>write( matcher->get\_submatch( sy-index ) ).
      CATCH cx\_sy\_invalid\_submatch.
        EXIT.
    ENDTRY.
  ENDDO.
ENDIF.
cl\_demo\_output=>display( ).

Executable Examples

-   [PCRE Regular Expression with Callouts](javascript:call_link\('abenpcre_callout_abexa.htm'\))
-   [Parsing with PCRE Regular Expression](javascript:call_link\('abenpcre_parsing_abexa.htm'\))
-   [XPath Regular Expression](javascript:call_link\('abenxpath_regex_abexa.htm'\))

Continue
![Example](exa.gif "Example") [regex - Search for a Regular Expression](javascript:call_link\('abenregex_abexa.htm'\))
![Example](exa.gif "Example") [regex - PCRE Regular Expression with Callouts](javascript:call_link\('abenpcre_callout_abexa.htm'\))