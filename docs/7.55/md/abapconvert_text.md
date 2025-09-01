  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Statements for Character String and Byte String Processing](javascript:call_link\('abenstring_processing_statements.htm'\)) → 

CONVERT TEXT

[Short Reference](javascript:call_link\('abapconvert_text_shortref.htm'\))

Syntax

CONVERT TEXT text INTO SORTABLE CODE hex.

Effect

The content of the operand text is converted to a sortable byte string and the result is assigned to the target field hex. The data object text itself remains unchanged.

The operand text must be of the type c or string. text is a [character-like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry"). The following can be specified for hex:

-   An existing byte-like variable.

-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), where a variable of type xstring is declared.

The content of text must contain valid characters. The sortable byte string is defined as a platform-dependent string in such a way that a size comparison or standard sorting of multiple of these fields produces an order in which the source fields text are sorted according to the [locale](javascript:call_link\('abenlocale_glosry.htm'\) "Glossary Entry") defined in the current [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry"). The text environment is set when an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") is opened or by using the statement [SET LOCALE](javascript:call_link\('abapset_locale.htm'\)).

If the target field hex is of type x and its length is not sufficient for the byte string, an uncatchable exception is raised. If the length is greater than that of the byte string, it is filled with hexadecimal 0 on the right. The sufficient length for all platforms is calculated as 24 times the length of text plus 24, but can be significantly shorter for some platforms. If hex is of type xstring, its length is adapted automatically.

Hint

The statement CONVERT TEXT is mainly intended to fill an index column in internal tables where the column can be used to sort the lines of the table according to a locale. Since internal tables can also be sorted directly according to a locale using the addition AS TEXT of the statement [SORT](javascript:call_link\('abapsort_itab.htm'\)), CONVERT TEXT is particularly suited for the following cases:

-   An internal table should be sorted according to a locale and then searched binarily using the statement READ TABLE or using a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry").

-   An internal table should be sorted more than once according to a locale. Using a sortable byte string ensures better performance than when using the addition AS TEXT.

-   Indexes for DDIC database tables should be structured according to a locale.

-   Textual comparisons are to be made between character-like data objects.
    

Example

The characters "a" and "Z" are compared directly after they have been converted by CONVERT TEXT. While "Z" is in front of "a" for most code pages in direct comparisons, the comparison of the converted values returns the expected textual order. See also the [executable example](javascript:call_link\('abensort_text_abexa.htm'\)) for SORT for internal tables.

IF 'a' > 'Z'.
  cl\_demo\_output=>write\_text( \`'a' > 'Z'\` ).
ELSE.
  cl\_demo\_output=>write\_text( \`'a' < 'Z'\` ).
ENDIF.
CONVERT TEXT: 'a' INTO SORTABLE CODE DATA(ax),
              'Z' INTO SORTABLE CODE DATA(zx).
IF ax > zx.
  cl\_demo\_output=>write\_text( \`'a' > 'Z'\` ).
ELSE.
  cl\_demo\_output=>write\_text( \`'a' < 'Z'\` ).
ENDIF.
cl\_demo\_output=>display( ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Uncatchable Exceptions

-   Cause: One of the operands has an invalid data type.
    Runtime error: CONVERT\_TEXT\_BAD\_OP

-   Cause: The source field has invalid content.
    Runtime error: CONVERT\_TEXT\_BAD\_SRC

-   Cause: The target field is too small.
    Runtime error: CONVERT\_TEXT\_DEST\_TOO\_SHORT