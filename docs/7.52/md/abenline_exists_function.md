  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_expr_func.htm) →  [log\_exp - Logical Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) →  [rel\_exp - Predicates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate.htm) →  [rel\_exp - Predicate Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate_functions.htm) →  [Predicate Functions for Table-Like Arguments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate_functions_tabs.htm) → 

rel\_exp - line\_exists, Predicate Function

Syntax

... line\_exists( [table\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm) ) ...

Effect

The [predicate function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate_function_glosry.htm "Glossary Entry") line\_exists checks whether the row of an internal table [specified](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_itab_line.htm) in the [table expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expression_glosry.htm "Glossary Entry") [table\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm) exists and returns the appropriate [truth value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_value_glosry.htm "Glossary Entry"). Alongside single table expressions, table\_exp can also handle [chainings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_chaining.htm), whose result is a row of an internal table.

Within line\_exists, an explicitly specified table key in the table row [table\_line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_itab_line.htm) of the table expression is handled in the same way as a [free search key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table_free.htm) specified for this table key.

Notes

-   The table expression is only used to check the existence of the specified row. No temporary [result](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_result.htm) is created.

-   The predicate function line\_exists can be considered as a short form of the statement [READ TABLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table.htm) with the addition [TRANSPORTING NO FIELDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table_outdesc.htm) following by sy-subrc being checked.

-   The predicate function line\_exists cannot be used to determine the row number in a table index of a search key, since table expressions do not fill the system field sy-tabix. The table function [line\_index](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenline_index_function.htm) can be used instead.

-   If a search key specified in [table\_line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_itab_line.htm) in the table expression covers the initial part of a [secondary table key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") without being specified explicitly after KEY, a syntax check warning is produced (which can be hidden by a pragma), since the function is generally quicker if the secondary key is specified explicitly.

-   As in other use cases for table expressions, line\_exists must be used carefully and no duplicate selections made. For example, line\_exists should not be used to first check the existence of row and then read it. Instead, the table expression can be [assigned to a field symbol](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area_writable_exp.htm) and then sy-subrc checked. If the row in question usually exists, the table expression can be specified in the required operand position and the exception CX\_SY\_ITAB\_LINE\_NOT\_FOUND caught.

-   As well as assigning a table expression a [default value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_optional_default.htm) for rows that are not found, there is also the option of checking the existences of rows.

Example

DATA flight\_tab TYPE HASHED TABLE OF spfli
                     WITH UNIQUE KEY carrid connid.
SELECT \*
       FROM spfli
       INTO TABLE @flight\_tab.
IF line\_exists( flight\_tab\[ carrid = 'LH'
                            connid = '0400' \] ).
  ...
ENDIF.