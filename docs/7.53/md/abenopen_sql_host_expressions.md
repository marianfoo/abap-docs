  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) → 

ABAP SQL - Host Expressions

Syntax

... @( expr ) ...

Effect

[Host expressions](javascript:call_link\('abenhost_expression_glosry.htm'\) "Glossary Entry") are ABAP expressions expr that can be specified in operand positions in ABAP SQL. expr is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). Any expressions or calls possible here, plus individual data objects, can be specified.

The operand positions for host expressions are the following reading positions:

-   Arguments of [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) and hence all operand positions in which these are possible.
    
-   Operand n after [UP TO](javascript:call_link\('abapselect_up_to_offset.htm'\)).
    
-   Operand n after [PACKAGE SIZE](javascript:call_link\('abapinto_clause.htm'\)).
    
-   Right sides of [SQL conditions](javascript:call_link\('abenwhere_logexp.htm'\)) (except LIKE and IN).
    
-   [Actual parameters](javascript:call_link\('abapselect_data_source.htm'\)) for input parameters of CDS views or CDS table functions .
    
-   Work areas wa and the internal tablesitab of the statements [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)), [UPDATE](javascript:call_link\('abapupdate.htm'\)), [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)) and [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\)).
    
-   Right side of a [SET expression](javascript:call_link\('abapupdate_set_expression.htm'\)) in UPDATE.
    

The host expressions of an ABAP SQL statement are evaluated from left to right and the results are passed to the database, like the content of [host variables](javascript:call_link\('abenopen_sql_host_variables.htm'\)). The following restrictions apply:

-   Host expressions cannot be used in dynamic tokens.

-   In a host expression of a [SELECT list](javascript:call_link\('abapselect_list.htm'\)), it is not possible to derive a data type from the operand position for the character # for a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry").

Notes

-   In the operand positions where host expressions can be specified, it is also always possible to specify [host variables](javascript:call_link\('abenopen_sql_host_variables.htm'\)). The reverse does not apply.

-   Host expressions can be specified as a part of SQL expressions or as elementary SQL expressions and wherever these SQL expressions are possible.

-   When host expressions are specified, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_750.htm'\)), which handles the statement more strictly than the regular syntax check.
    

Example

Gets the right side of a [comparison](javascript:call_link\('abenwhere_logexp_compare.htm'\)) in a [WHERE](javascript:call_link\('abapwhere.htm'\)) condition using a [functional method call](javascript:call_link\('abenfunctional_method_call_glosry.htm'\) "Glossary Entry") in a host expression. Within the host expression, the instance operator [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) is used here to create a temporary object.

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

-   [Host Expressions in the WHERE Condition](javascript:call_link\('abenhost_expr_in_where_cond_abexa.htm'\))

-   [SQL Expressions in the WHERE Condition](javascript:call_link\('abensql_expr_in_where_cond_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Host Expressions, Use in the WHERE Condition](javascript:call_link\('abenhost_expr_in_where_cond_abexa.htm'\))