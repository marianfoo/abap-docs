  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Internal Table Processing](javascript:call_link\('abenitab_obsolete.htm'\)) → 

WRITE TO itab

[Short Reference](javascript:call_link\('abapwrite_to_itab_shortref.htm'\))

Obsolete Syntax

WRITE dobj TO itab*\[*+off*\]**\[*(len)*\]* INDEX idx
      *\[*[format\_options](javascript:call_link\('abapwrite_to_options.htm'\))*\]*.

Effect

This variant, of the statement WRITE TO, which is forbidden in classes, has the same effect as the allowed [variant](javascript:call_link\('abapwrite_to.htm'\)), except that the formatted content is written to the line of the internal table itab specified in idx. The internal table must be a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") without [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"). The same requirements apply to the line type as for the variable [destination](javascript:call_link\('abapwrite_to.htm'\)).

idx expects a data object of the data type i. It must be a data type which, when the statement is executed, contains the index of the line to be overwritten. If the value of idx is less than or equal to 0, an uncatchable exception is raised. If the value of idx is greater than the number of table lines, no line will be overwritten and sy-subrc will be set to 4.

After the table name itab, [offset and length specifications](javascript:call_link\('abenoffset_length_specific_glosry.htm'\) "Glossary Entry") off and len can be made. These refer to the specified table line.

System Fields

sy-subrc

Meaning

0

The data object specified in source\_name and the line specified in idx were found and the statement was executed.

4

The data object specified in source\_name or the line specified in idx were not found and the statement was not executed.

Hint

This form of the statement WRITE TO is now only possible outside of classes and is replaced by field symbols or data references using access to table lines. The following lines show the implementation with a field symbol:

FIELD-SYMBOLS <line> LIKE LINE OF itab.
ASSIGN itab\[ idx \] TO <line>.
WRITE dobj TO <line>*\[*+off*\]**\[*(len)*\]**\[* [format\_options](javascript:call_link\('abapwrite_to_options.htm'\))*\]*.

Example

Formatted write of current date into the first line of the internal table itab. The first statement WRITE TO uses the obsolete form; the second statement WRITE TO represents the recommended variant.

DATA line TYPE c LENGTH 80.
DATA itab LIKE TABLE OF line.
FIELD-SYMBOLS <line> LIKE LINE OF itab.
APPEND line TO itab.
WRITE sy-datum TO itab INDEX 1 DD/MM/YYYY.
ASSIGN itab\[ 1 \] TO <line>.
WRITE sy-datum TO <line> DD/MM/YYYY.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Uncatchable Exceptions

-   Cause: Incorrect index specified <= 0 in idx
    Runtime error: TABLE\_INVALID\_INDEX

-   Cause: Negative length specified when offset/length is specified.
    Runtime error: WRITE\_TO\_LENGTH\_NEGATIVE

-   Cause: Negative offset specified when offset/length is specified.
    Runtime error: WRITE\_TO\_OFFSET\_NEGATIVE

-   Cause: Offset specified when offset/length is specified is greater than the field length.
    Runtime error: WRITE\_TO\_OFFSET\_TOOLARGE