  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) → 

sql\_exp - sql\_string

Syntax

... operand1 && operand2  *\[*&& operand3 ... *\]* ...

Effect

String expression in ABAP SQL. The operator && chains the character strings in two adjacent operand to a single character string. The operands can have the following data types:

-   Dictionary types [CHAR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm), [CLNT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm), [CUKY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm), [LANG](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm), and [UNIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) for columns of [data sources](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm).

-   ABAP type c for host variables and host expressions.

-   Text field literal of type c. Empty [text field literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_field_literal_glosry.htm "Glossary Entry") cannot be specified.

The operator && can only be used to chain the elementary operands stated above. Any other expressions cannot be chained. The result of the chaining must be no longer than 255 characters.

Trailing blanks are handled as follows:

-   Precisely one blank is respected in host variables declared using CONSTANTS and in text field literals consisting only of blanks.

-   In all other cases, trailing blanks are cut off on the right.

The result has the type [CHAR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) in the resulting length and can be assigned to the ABAP types c and string in accordance with the associated [assignment rule](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_into_conversion.htm).

If the operand of a string expression has the [null value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennull_value_glosry.htm "Glossary Entry"), the result of the full string expression is the null value.

Notes

-   Strings can also be concatenated using the SQL function [CONCAT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_string_func.htm). The function CONCAT is restricted to concatenations of two operands but has the following benefits when compared to the operator &&:

-   It allows expressions to be used as operands.

-   It allows more data types.

-   It does not apply any special handling to constants and text field literals that contain only blanks.

-   It allows results to be longer than 255 characters.

-   A string expression cannot be evaluated in the [table buffer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_buffer_glosry.htm "Glossary Entry") and always causes [table buffering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_buffering_glosry.htm "Glossary Entry") to be bypassed.

Example

The two columns in a results set are created using a chaining of character-like columns of the data source and of literals.

SELECT FROM spfli
         INNER JOIN scarr
           ON spfli~carrid = scarr~carrid
       FIELDS spfli~carrid && ' ' && '(' && scarr~carrname && ')'
              AS carrier,
              cityfrom && ' ' && '-' && ' ' && cityto
              AS connection
       ORDER BY spfli~carrid, connid
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

Executable Example

[SQL Expressions, CASE and &&](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_expr_case_string_abexa.htm)