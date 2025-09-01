  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_operands.htm) → 

Open SQL - Host Expressions

Syntax

... @( expr ) ...

Effect

[Host expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhost_expression_glosry.htm "Glossary Entry") are ABAP expressions expr that can be specified in operand positions in Open SQL. expr is a [general expression position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). Any expressions or calls possible here, plus individual data objects, can be specified.

The operand positions for host expressions are the following reading positions:

-   Arguments of [SQL expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm) and hence all operand positions in which these are possible.
    
-   Operand n after [UP TO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_up_to_offset.htm).
    
-   Operand n after [PACKAGE SIZE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm).
    
-   Right sides of [SQL conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp.htm) (except LIKE and IN).
    
-   [Actual parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) for input parameters of CDS views or CDS table functions.
    
-   Work areas wa and the internal tablesitab of the statements [INSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_dbtab.htm), [UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate.htm), [MODIFY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_dbtab.htm) and [DELETE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_dbtab.htm).
    
-   Right side of a [SET expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate_set_expression.htm) in UPDATE.
    

The host expressions of an Open SQL statement are evaluated from left to right and the results are passed to the database, like the content of [host variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_variables.htm). The following restrictions apply:

-   Host expressions cannot be used in dynamic tokens.

-   In a host expression of a [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm), it is not possible to derive a data type from the operand position for the character # for a [constructor expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_glosry.htm "Glossary Entry").

Notes

-   In the operand positions where host expressions can be specified, it is also always possible to specify [host variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_variables.htm). The reverse does not apply.

-   Host expressions can be specified as a part of SQL expressions or as elementary SQL expressions and wherever these SQL expressions are possible.

-   When host expressions are specified, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_750.htm), which handles the statement more strictly than the regular syntax check.
    

Example

Gets the right side of a [comparison](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_compare.htm) in a [WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhere.htm) condition using a [functional method call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") in a host expression. Within the host expression, the instance operator [NEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_new.htm) is used here to create a temporary object.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    METHODS get\_url RETURNING VALUE(url) TYPE scarr-url.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD get\_url.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  SELECT FROM scarr
         FIELDS carrname
         WHERE  url = @( NEW cls( )->get\_url( ) )
         INTO TABLE @DATA(itab).

Executable Examples

-   [Host Expressions in the WHERE Condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhost_expr_in_where_cond_abexa.htm)

-   [SQL Expressions in the WHERE Condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_expr_in_where_cond_abexa.htm)

Continue
![Example](exa.gif "Example") [Host Expressions, Use in the WHERE Condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhost_expr_in_where_cond_abexa.htm)