  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_statements.htm) → 

CONVERT TEXT

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconvert_text_shortref.htm)

Syntax

CONVERT TEXT text INTO SORTABLE CODE hex.

Effect

The content of the operand text is converted to a sortable byte string and the result is assigned to the target field hex. The data object text itself remains unchanged.

The operand text must be of the type c or string. text is a [character-like expression position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"). The following can be specified for hex:

-   An existing byte-like variable.
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_inline.htm), where a variable of type xstring is declared.
    

The content of text must contain valid characters. The sortable byte string is defined by platform such that a size comparison or standard sort of multiple of these fields produces an order in which the source fields text are sorted by the [locale](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlocale_glosry.htm "Glossary Entry") defined in the current [text environment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_environment_glosry.htm "Glossary Entry"). The text environment is set when an [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry") is opened or by using the statement [SET LOCALE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_locale.htm).

If the target field hex is of type x and its length is not sufficient for the byte string, a non-handleable exception is raised. If the length is greater than that of the byte string, it is filled with hexadecimal 0 on the right. The minimum length for all platforms is calculated as 24 times the length of text plus 24, but can be significantly shorter for some platforms. If hex is of type xstring, its length is adapted automatically.

Note

The statement CONVERT TEXT is designed to fill an index column (in internal tables) by which the rows of the table can be sorted by locale. Since internal tables can also be sorted by locale directly by using the addition AS TEXT of the statement [SORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_itab.htm), CONVERT TEXT is especially useful in the following cases:

-   If an internal table is sorted by locale and then subjected to a binary search using the statement READ TABLE or using a [table expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_expression_glosry.htm "Glossary Entry").

-   An internal table is to be sorted more than once by locale. Using a sortable byte string ensures better performance than when using the addition AS TEXT.

-   Indexes for database tables should be structured in accordance with a locale.

-   Textual comparisons are to be made between character-like data objects.
    

Example

The characters "a" and "Z" are compared directly after they have been converted by CONVERT TEXT. While "Z" is in front of "a" for the majority of code pages in direct comparisons, the comparison of the converted values returns the expected textual order. See also the [executable example](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensort_text_abexa.htm) for SORT for internal tables.

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

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: One of the operands has an invalid data type.
    Runtime error: CONVERT\_TEXT\_BAD\_OP
    
-   Cause: The source field has invalid content.
    Runtime error: CONVERT\_TEXT\_BAD\_SRC
    
-   Cause: The target field is too small.
    Runtime error: CONVERT\_TEXT\_DEST\_TOO\_SHORT