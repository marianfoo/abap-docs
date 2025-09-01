  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_expr_func.htm) →  [String Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions.htm) →  [Shared Parameters of Character String Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions_common_paras.htm) → 

sub - Substring

Syntax

... ( ... sub = substring ...  ) ...

Effect

substring is used to pass a character string whose characters are to be found or inserted. substring is a [character like expression position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"). Only arguments with elementary types can be specified.

If a character-like data object with a fixed length is specified, any trailing blanks are ignored.

Note

The behavior displayed when an empty string is specified in substring depends on the function in question.

Example

The result of the following function call is 2.

DATA(result) = count( val = 'axaxa' sub = 'x' ).