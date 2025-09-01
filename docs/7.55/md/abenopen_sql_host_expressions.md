  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - SQL Operands sql\_elem](javascript:call_link\('abensql_operands.htm'\)) → 

ABAP SQL - @( expr )

Syntax

... @( expr ) ...

Effect

Specification of a [host expression](javascript:call_link\('abenhost_expression_glosry.htm'\) "Glossary Entry") in an ABAP SQL statement. [Host expressions](javascript:call_link\('abenhost_expression_glosry.htm'\) "Glossary Entry") are ABAP expressions expr that can be specified in operand positions in ABAP SQL. expr is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). Any expressions or calls possible here, as well as individual data objects, can be specified.

Host expressions can be specified as [elementary SQL expressions](javascript:call_link\('abensql_elem.htm'\)) in all operand positions in which [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) are possible. They can also occur in the following read positions in which no SQL expressions are possible:

-   Operand n after [UP TO](javascript:call_link\('abapselect_up_to_offset.htm'\)).

-   Operand n after [PACKAGE SIZE](javascript:call_link\('abapinto_clause.htm'\)).

-   Right sides of [SQL conditions](javascript:call_link\('abenosql_stmt_logexp.htm'\)) except LIKE and IN.

-   [Actual parameters](javascript:call_link\('abapselect_data_source.htm'\)) for input parameters of CDS views or CDS table functions.

-   Work areas wa and the internal tables itab of the statements [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)), [UPDATE](javascript:call_link\('abapupdate.htm'\)), [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)) and [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\)).

-   Right side of a [SET expression](javascript:call_link\('abapupdate_set_expression.htm'\)) in UPDATE.

The relevant restrictions apply in operand positions in which host variables are handled like SQL expressions.

The host expressions of an ABAP SQL statement are evaluated from left to right and the results are passed to the database, like the content of [host variables](javascript:call_link\('abenopen_sql_host_variables.htm'\)). Conversions of the result of a host expression to the data type required in the operand position must be possible and be [lossless](javascript:call_link\('abapmove_exact.htm'\)). The following additional restrictions apply:

-   Host expressions cannot be used in dynamic tokens.

-   In a host expression of a [SELECT list](javascript:call_link\('abapselect_list.htm'\)), it is not possible to derive a data type from the operand position for the character # for a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry").

Hints

-   In the operand positions where host expressions can be specified, it is also always possible to specify [host variables](javascript:call_link\('abenopen_sql_host_variables.htm'\)) but not vice versa.

-   In some operand positions in which host expressions are forbidden, but [literals](javascript:call_link\('abenabap_sql_literals.htm'\)) and [host variables](javascript:call_link\('abenopen_sql_host_variables.htm'\)) are allowed, the syntax @( literal ) and @( dobj ) can be used. It is handled as a literal or host variable rather than as an expression.

-   When host expressions are specified, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_750.htm'\)), which handles the statement more strictly than the regular syntax check.
    

Example

Determination of the right side of a [comparison](javascript:call_link\('abenwhere_logexp_compare.htm'\)) in a [WHERE](javascript:call_link\('abapwhere.htm'\)) condition using a [functional method call](javascript:call_link\('abenfunctional_method_call_glosry.htm'\) "Glossary Entry") in a host expression. Within the host expression, the instance operator [NEW](javascript:call_link\('abenconstructor_expression_new.htm'\)) is used here to create a temporary object.

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