  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20Exceptions%2C%20ABENABAP_SQL_EXCEPTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP SQL - Exceptions

Catchable Exceptions

CX\_SY\_OPEN\_SQL\_DB

-   Cause: A general database error occurred.
    Runtime error: DBIF\_RSQL\_SQL\_ERROR
-   Cause: Error in module RSQL of the database interface.
    Runtime error: DBIF\_RSQL\_INVALID\_RSQL
-   Cause: No data found for the specified key.
    Runtime error: DBIF\_RSQL\_KEY\_NOT\_FOUND
-   Cause: Unexpected end of data when accessing a table.
    Runtime error: DBIF\_RSQL\_END\_OF\_DATA
-   Cause: The key for a table was not completely specified.
    Runtime error: DBIF\_RSQL\_KEY\_NOT\_SPECIFIED
-   Cause: An invalid database cursor was used.
    Runtime error: DBIF\_RSQL\_INVALID\_CURSOR
-   Cause: An attempt was made to access a closed database cursor.
    Runtime error: SAPSQL\_SQLS\_INVALID\_CURSOR
-   Cause: The length of an ABAP target field does not match the size of the database field.
    Runtime error: DBSQL\_DBSL\_LENGTH\_ERROR

CX\_SY\_DYNAMIC\_OSQL\_ERROR

-   CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS
    -   Cause: The database column whose values are to be aggregated does not have a numeric type.
        Runtime error: SAPSQL\_HAVING\_AVG\_TYPE
    -   Cause: The database column whose values are to be aggregated does not have a numeric type.
        Runtime error: SAPSQL\_HAVING\_SUM\_TYPE
    -   Cause: Search pattern not specified in a character literal.
        
        Runtime error: SAPSQL\_LIKE\_VAL\_TYPE
        
    -   Cause: A token cannot be interpreted as a literal or in the current context of valid variable names.
        Runtime error: SAPSQL\_WHERE\_ILLEGAL\_VALUE and SAPSQL\_SET\_ILLEGAL\_VALUE
    -   Cause: A table name is too long.
        
        Runtime error: SAPSQL\_TABNAME\_TOO\_LONG
        
    -   Runtime error: A field name is too long.
        
        Runtime error: SAPSQL\_FIELDNAME\_TOO\_LONG
        
    -   Cause: No table exists with the specified name.
        
        Runtime error: SAPSQL\_INVALID\_TABLENAME
        
    -   Cause: A field name is ambiguous.
        
        Runtime error: SAPSQL\_AMBIGUOUS\_FIELDNAME
        
    -   Cause: No column exists with the specified name.
        
        Runtime error: SAPSQL\_INVALID\_FIELDNAME
        
    -   Cause: The specified table is not declared as a table or view in the ABAP Dictionary.
        Runtime error: SAPSQL\_NO\_DBTAB\_OR\_VIEW
    -   Cause: An attempt was made to select the sum of a non-numeric field.
        Runtime error: SAPSQL\_FIELDLIST\_SUM\_TYPE
    -   Cause: An attempt was made to select the average of a non-numeric field.
        Runtime error: SAPSQL\_FIELDLIST\_AVG\_TYPE
    -   Cause: An attempt was made to create an aggregate function using a [LOB column](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_glosry.htm "Glossary Entry").
        Runtime error: SAPSQL\_AGGREGATE\_LOB
    -   Cause: An attempt was made to sort the values of a [LOB column](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_glosry.htm "Glossary Entry").
        Runtime error: SAPSQL\_ORDER\_BY\_LOB
    -   Cause: An attempt was made to use the addition DISTINCT on a [LOB column](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_glosry.htm "Glossary Entry").
        Runtime error: SAPSQL\_DISTINCT\_AND\_LOB
    -   Cause: An alias is too long.
        
        Runtime error: SAPSQL\_ALIASNAME\_TOO\_LONG
        
    -   Cause: An attempt was made to sort the values of a [LOB column](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_glosry.htm "Glossary Entry").
        Runtime error: SAPSQL\_GROUP\_BY\_LOB
    -   Cause: An attempt was made to use a [LOB column](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlob_glosry.htm "Glossary Entry") in a logical expression.
        Runtime error: SAPSQL\_BOUND\_LONG\_STRING
    -   Cause: A pattern specified in LIKE is too long.
        
        Runtime error: SAPSQL\_LIKE\_PATTERN\_TOO\_LONG and SAPSQL\_LIKE\_PATTERN\_TOO\_LONG
        
    -   Cause: A field, whose value is to be changed with + or \-, has a non-numeric type
        Runtime error: SAPSQL\_SET\_PLUS\_MINUS\_TYPE
-   CX\_SY\_DYNAMIC\_OSQL\_SYNTAX
    -   Cause: An error occurred while parsing a dynamic entry.
        
        Runtime error: SAPSQL\_PARSE\_ERROR
        
    -   Cause: The keyword AND is missing after the lower comparison value of BETWEEN.
        Runtime error: SAPSQL\_BETWEEN\_MISSING\_AND
    -   Cause: The logical expression has incorrect parentheses.
        
        Runtime error: SAPSQL\_HAVING\_PARENTHESES
        
    -   Cause: An unknown aggregate function was found.
        
        Runtime error: SAPSQL\_ILLEGAL\_AGGREGATE
        
    -   Cause: The operator IS NULL is not followed by the keyword NULL.
        Runtime error: SAPSQL\_ILLEGAL\_IS\_NULL
    -   Cause: The operator IN has incorrect parentheses.
        
        Runtime error: SAPSQL\_IN\_ILLEGAL\_LIST
        
    -   Cause: The logical expression contains a text field literal that does not have a closing quotation mark.
        Runtime error: SAPSQL\_LIKE\_QUOTES
    -   Cause: The logical expression ends unexpectedly.
        
        Runtime error: SAPSQL\_MISSING\_LOG\_CONDITION
        
    -   Cause: The Escape character is missing after the addition ESCAPE.
        Runtime error: SAPSQL\_WHERE\_MISSING\_ESCAPE
    -   Cause: An operator is missing in the logical expression.
        
        Runtime error: SAPSQL\_WHERE\_MISSING\_OPERATOR
        
    -   Cause: A literal or name of an ABAP variable is missing in the logical expression.
        Runtime error: SAPSQL\_WHERE\_MISSING\_VALUE
    -   Cause: The logical expression has incorrect parentheses.
        
        Runtime error: SAPSQL\_WHERE\_PARENTHESES
        
    -   Cause: The logical expression contains a text field literal that does not have a closing quotation mark.
        Runtime error: SAPSQL\_WHERE\_QUOTES
    -   Cause: An unknown operator is used in the logical expression.
        
        Runtime error: SAPSQL\_WHERE\_UNKNOWN\_OPERATOR
        
    -   Cause: An alias is missing.
        
        Runtime error: SAPSQL\_MISSING\_ALIAS
        
    -   Cause: A column from the right side of a LEFT OUTER JOIN is used in a WHERE condition.
        Runtime error: SAPSQL\_ACCESS\_TO\_RHS\_TABLE
    -   Cause: Syntax error when the addition [CREATING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_creating.htm) was specified dynamically.
        Runtime error: SAPSQL\_NO\_LOB\_COLUMN
        Runtime error: SAPSQL\_TWICE\_DEFINITION
        Runtime error: SAPSQL\_UNION\_POSSIBLE
        Runtime error: SAPSQL\_MISSING\_FOR\_COLUMNS
        Runtime error: SAPSQL\_OTHER\_ONLY\_AT\_THE\_END

The following exceptions can only occur when using the statement [UPDATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate.htm):

-   Cause: An attempt was made to change a database field using an operator other than + or \-.
    Runtime error: SAPSQL\_SET\_NOT\_PLUS\_MINUS
-   Cause: An unknown operator was used in the statement SET.
    Runtime error: SAPSQL\_SET\_UNKNOWN\_OPERATOR
-   Cause: A literal or name of an ABAP variable is missing in the statement SET.
    Runtime error: SAPSQL\_SET\_MISSING\_VALUE
-   Cause: The statement SET contains a text field literal that does not have a closing quotation mark.
    Runtime error: SAPSQL\_SET\_QUOTES

CX\_SY\_SQL\_UNSUPPORTED\_FEATURE

-   Cause: A database feature is used that is not supported by the current database system.
    Runtime error: SAPSQL\_UNSUPPORTED\_FEATURE

Uncatchable Exceptions

-   Cause: Invalid call of the database interface.
    Runtime error: DBIF\_RSQL\_INVALID\_REQUEST
-   Cause: Insufficient memory is available for the statement.
    Runtime error: DBIF\_RSQL\_NO\_MEMORY
-   Cause: Data area passed is too short for access to the table.
    Runtime error: DBIF\_RSQL\_BUFFER\_TOO\_SHORT
-   Cause: The structure of a table is inconsistent with the dictionary.
    Runtime error: DBIF\_RSQL\_DDIC\_INCONSISTENT
-   Cause: The sort order specified for a table is not possible.
    Runtime error: DBIF\_RSQL\_SORT\_ORDER
-   Cause: Error when accessing the buffer of a table.
    Runtime error: DBIF\_RSQL\_BUFFER\_ERROR
-   Cause: A table is not known or does not exist.
    Runtime error: DBIF\_RSQL\_TABLE\_UNKNOWN
-   Cause: Internal error when accessing a table.
    Runtime error: DBIF\_RSQL\_INTERNAL\_ERROR
-   Cause: Unexpected return code when accessing a table.
    Runtime error: DBIF\_RSQL\_UNEXPECTED\_CODE