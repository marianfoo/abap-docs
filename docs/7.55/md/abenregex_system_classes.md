  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [Regular Expressions (regex)](javascript:call_link\('abenregular_expressions.htm'\)) → 

regex - System Classes

The system classes for regular expressions are CL\_ABAP\_REGEX and CL\_ABAP\_MATCHER. Both are documented in the class library.

-   [CL\_ABAP\_REGEX](#abenregex-system-classes-1--------cl--abap--matcher---@ITOC@@ABENREGEX_SYSTEM_CLASSES_2)

CL\_ABAP\_REGEX

Factory methods of class CL\_ABAP\_REGEX create an object-oriented representation of a regular expression passed in a character-like field:

-   CREATE\_PCRE creates instances for regular expressions with [PCRE syntax](javascript:call_link\('abenregex_pcre_syntax.htm'\)).

-   CREATE\_POSIX creates instances for regular expressions with [POSIX syntax](javascript:call_link\('abenregex_posix_syntax.htm'\)).

Optional parameters allow further specifications for handling the regular expression.

Instances of CL\_ABAP\_REGEX can be used with the class CL\_ABAP\_MATCHER and with the addition REGEX of the statements [FIND](javascript:call_link\('abapfind.htm'\)) and [REPLACE](javascript:call_link\('abapreplace.htm'\)).

Hints

-   The class CL\_ABAP\_REGEX can also be instantiated with the operator [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) or the statement [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)), but this is deprecated. Such a direct instantiation of CL\_ABAP\_REGEX creates instances for regular expressions with [POSIX syntax](javascript:call_link\('abenregex_posix_syntax.htm'\)). Instead of direct instantiation, the above factory methods CREATE\_PCRE or CREATE\_POSIX should be used.

-   Instances of CL\_ABAP\_REGEX cannot be used with the addition PCRE of the statements [FIND](javascript:call_link\('abapfind.htm'\)) and [REPLACE](javascript:call_link\('abapreplace.htm'\)). However, both kinds of objects for regular expressions, PCRE and POSIX, can be used with the addition REGEX.

CL\_ABAP\_MATCHER

The class CL\_ABAP\_MATCHER applies regular expressions to either a character string or an internal table. Its methods allow finding, replacing or matching regular expressions. Instances of CL\_ABAP\_MATCHER can be created either with factory methods of the class itself or with the method CREATE\_MATCHER of the class CL\_ABAP\_REGEX. The latter allows the use of the same regular expression multiple times for different texts.

The class CL\_ABAP\_MATCHER stores the current state of text processing. The current processing state can be queried using different GET\_... methods.

Hint

If a regular expression has to be used several times, it is preferable to work with objects of CL\_ABAP\_MATCHER created with CL\_ABAP\_REGEX.

Example

An object of CL\_ABAP\_MATCHER is created with the method CREATE\_MATCHER of an instance of the class CL\_ABAP\_REGEX that represents a regular expression with PCRE syntax. Depending on a successful match, the registered subgroups of submatches are received and displayed.

DATA(matcher) =
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