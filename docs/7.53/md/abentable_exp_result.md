---
title: "Syntax"
description: |
  ...              itab itab_line(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_itab_line.htm) ...(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_chaining.htm)    VALUE type( itab itab_line(https://help.sap.com/doc/
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_result.htm"
abapFile: "abentable_exp_result.htm"
keywords: ["select", "delete", "do", "while", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "field-symbol", "abentable", "exp", "result"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenitab.htm) →  [Expressions and Functions for Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_processing_expr_func.htm) →  [table\_exp - Table Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_expressions.htm) → 

table\_exp - Result

Syntax

... *{*             itab\[ [itab\_line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_itab_line.htm) \][*\[*...*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_chaining.htm) *}*
  *|* *{* VALUE type( itab\[ [itab\_line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_itab_line.htm) \][*\[*...*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_chaining.htm) *\[* [default](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_optional_default.htm)*\]* ) *}*
  *|* *{* REF   type( itab\[ [itab\_line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_itab_line.htm) \][*\[*...*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_chaining.htm) *\[* [default](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_optional_default.htm)*\]*  ) *}* ...

Alternatives:

[1\. ... itab\[ ... \]*\[*...*\]*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... VALUE type( itab\[ ... \]*\[*...*\]* *\[*default*\]* )](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... REF type( itab\[ ... \]*\[*...*\]* *\[*default*\]* )](#!ABAP_ALTERNATIVE_3@3@)

Effect

If a [table expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_expressions.htm) is specified in a [general expression position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") or in a [functional operand position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunctional_position_glosry.htm "Glossary Entry"), the read row can be passed to this position in three different ways:

-   As a [field symbol](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfield_symbol_glosry.htm "Glossary Entry") to which the table row is assigned.

-   As a [work area](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwork_area_glosry.htm "Glossary Entry") that contains the content of the table row.

-   As a [data reference variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") that points to the table row.

The result of a table expression is only available temporarily. It is used as an operand of a statement and then deleted again. It is deleted when the current statement is closed or after the analysis of a relational expression once the truth value is determined.

The alternative ways of specifying a table expression shown here define the method used to return the table row. A default value [default](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_optional_default.htm) can be specified for the result in two alternatives.

Alternative 1

... itab\[ ... \]

Alternative 2

... VALUE type( itab\[ ... \] *\[*default*\]* )

Effect

Both alternatives can be specified in all reading positions for table expressions in which the row type matches the operand type (see also [Chainings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_chaining.htm)). The result is either a temporary field symbol, a temporary work area, or the value is assigned directly to a target variable. If the value operator VALUE is used, an optional default value [default](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_optional_default.htm) can be specified for cases where no table row is found.

-   If the table expression is not specified as an operand of the value operator [VALUE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_value.htm) or of the reference operator [REF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_ref.htm), the result is usually a temporary field symbol typed with the row type of the internal table and to which the table row in question is assigned. For performance reasons, there are exceptions to this rule in the following cases:

-   If the table expression is specified as the right side of an [assignment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_operator.htm), the content of the table row or a [component](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_chaining.htm) is assigned directly to the target variable instead of a temporary result being produced.

-   If the row type of the internal table is flat and thin and used directly in the operand position (for example as an operand of an arithmetic expression or as a formal parameter for an actual parameter where pass by value is declared), the result is a temporary work area.

-   If the table expression is specified as an operand of the value operator [VALUE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_value.htm), the result is always a temporary work area, except if the expression is specified as the right side of an [assignment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_operator.htm). The data type of the work area is determined by specifying [type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_value.htm) for the constructor expression:

-   If the # character is specified for type and the data type required in an operand position is known uniquely and completely, the operand type is used. Otherwise the row type of the internal table or of a [chaining](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_chaining.htm) specified here is applied.

-   If a non-generic data type dtype is specified for type, the row type of the internal table must be compatible with this data type or be convertible to this data type. In this case, the temporary work area has the data type dtype and the data of the row in question is converted to this data type, if necessary, in accordance with the [conversion rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_rule_glosry.htm "Glossary Entry").

If the expression is specified as the right side of an [assignment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_operator.htm), the content of the table row or [component](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_chaining.htm) is also assigned directly when using VALUE.

In most cases, it is transparent (and irrelevant) whether the result is made available as a field symbol or as a work area. In some cases, however, performance reasons or side effects dictate that the standard behavior is suspended and data written explicitly to a temporary work area instead.

-   For notes about performance, see the programming guideline [Output Behavior](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_output_guidl.htm "Guideline"). This guideline should also be respected when using table expressions. In the [extended program checks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenextended_program_check_glosry.htm "Glossary Entry"), a syntax check warning (which can hidden using a pragma) is produced if there is an obvious violation of the rule.

-   Side effects can occur if the row of the internal table to which the temporary field symbol points is modified while the binding to the field symbol persists.

Notes

-   A table expression whose result is a temporary field symbol can be viewed as a short form of the statement [READ TABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table.htm) with the addition [ASSIGNING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table_outdesc.htm) an table expression whose result is a temporary work area can be viewed as a short form of this statement with the addition [INTO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table_outdesc.htm). The corresponding rules and notes apply.

-   More specifically, [restrictions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table_outdesc.htm) with respect to modifying key fields apply to table expressions (in writer positions) whose results are temporary field symbols.

-   In variant 1, the compiler decides whether the result is a field symbol or a work area, not the table content at runtime.

-   [Chainings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_chaining.htm) of table expressions can also be specified as an argument of the value operator VALUE. This argument then determines the final result of the chaining.

-   Unlike when using the value operator [VALUE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_value.htm) for constructing values, you can specify elementary types or reference types for table expressions for type.

Example

The following program excerpt shows table expression with field symbols and work areas as a result.

CLASS class DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS meth IMPORTING p1 TYPE i      OPTIONAL
                                 p2 TYPE string OPTIONAL
                                 p3 TYPE c      OPTIONAL.
ENDCLASS.
CLASS class IMPLEMENTATION.
  METHOD meth.
  ENDMETHOD.
ENDCLASS.
TYPES text   TYPE c LENGTH 1000.
DATA itab TYPE TABLE OF i.
DATA  jtab TYPE TABLE OF string.
DATA  ktab TYPE TABLE OF text.
FIELD-SYMBOLS <itab> TYPE INDEX TABLE.
START-OF-SELECTION.
  itab = VALUE #( ( 1 ) ).
  jtab = VALUE #( ( CONV string( sy-abcde ) ) ).
  ktab = VALUE #( ( sy-abcde ) ).
  DATA(number) = itab\[ 1 \].
  DATA(text)   = VALUE #( jtab\[ 1 \] ).
  class=>meth( p1 = itab\[ 1 \] )            ##operator.
  class=>meth( p2 = VALUE #( jtab\[ 1 \] ) ) ##operator.
  class=>meth( p3 = VALUE #( ktab\[ 1 \] ) ) ##operator.
  ASSIGN itab TO <itab>.
  class=>meth( p1 = <itab>\[ 1 \] ).

-   Temporary work areas are passed in the assignments to number and text. The VALUE operator of the second assignment expresses this explicitly, but is not necessary.

-   In the passes to the formal parameter of the method meth, the results are temporary field symbols by default. In two cases, the VALUE operator forces a work area explicitly. In the extended program checks, all passes produces syntax check warnings that can be hidden here using the pragma ##operator.

-   In the pass to the formal parameter p1, using a field symbol by default is bad for performance, since the row is a flat thin table row. The VALUE operator is recommended instead.

-   In the pass to the formal parameter p2, specifying a work area explicitly is bad for performance, since the row is a deep table row. The VALUE operator is not recommended here.

-   In the pass to the formal parameter p3, specifying a work area explicitly is bad for performance, since the row is a wide table row. The VALUE operator is not recommended here.

-   When specifying the internal table using a generically typed field symbol itab, using the temporary field symbol by default does not produce a syntax check warning, since no fixed work area can be derived here.

Executable Example

[Table Expressions, Side Effects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_side_effect_abexa.htm)

Alternative 3

... REF type( itab\[ ... \] *\[*default*\]* )

Effect

This alternative can be specified in all reading positions for table expressions in which a data reference variable with a suitable type is expected. If a table expression is used as an argument of a constructor expression with the reference operator [REF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_ref.htm), the result is a temporary data reference variable that points to the table row in question. If no table row is found, an optional default value [default](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_optional_default.htm) can be specified.

The [static type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstatic_type_glosry.htm "Glossary Entry") of the reference variable is determined by specifying [type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_ref.htm) for the constructor expression:

-   If the # character is specified for type, the row type of the internal table is used as the static type.

-   If a non-generic data type dtype or the generic data type [data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuilt_in_types_generic.htm) is specified for type, they determine the static type of the result. A non-generic data type, dtype, must be compatible with the row type of the internal table.

If the reference operator [REF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_ref.htm) is specified in front of a [chaining](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_chaining.htm) whose result is a component of a structured table row, it creates a reference to this component. In this case, no substring accesses [+off(len)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoffset_length.htm) can be specified after the component.

Notes

-   A table expression whose result is a temporary data reference variable can be viewed as a short form of the statement [READ TABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table.htm) with the addition [REFERENCE INTO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table_outdesc.htm). The corresponding rules and notes apply.

-   More specifically, [restrictions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table_outdesc.htm) with respect to modifying key fields apply to table expressions (in writer positions) whose results are temporary data reference variables.

-   The static type of the temporary data reference variable can only be the row type of the internal table or be fully generic.

-   [Chainings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_chaining.htm) of table expressions can also be specified as an argument of the reference operator REF. This argument then determines the final result of the chaining.

Example

The following program is similar to the example for [READ TABLE REFERENCE INTO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table_outdesc.htm), but the statement READ has been replaced by a table expression in the constructor expression REF.

DATA: carrid TYPE sflight-carrid,
      connid TYPE sflight-connid,
      fldate TYPE sflight-fldate.
...
DATA sflight\_tab TYPE SORTED TABLE OF sflight
                 WITH UNIQUE KEY carrid connid fldate.
SELECT \*
       FROM sflight
       WHERE carrid = @carrid AND
             connid = @connid
       INTO TABLE @sflight\_tab.
IF sy-subrc = 0.
  TRY.
      DATA(sflight\_ref) =
        REF #( sflight\_tab\[ KEY primary\_key
                            COMPONENTS carrid = carrid
                                       connid = connid
                                       fldate = fldate \] ).
      sflight\_ref->price = sflight\_ref->price \* '0.9'.
    CATCH cx\_sy\_itab\_line\_not\_found.
      ...
  ENDTRY.
ENDIF.

Continue
![Example](exa.gif "Example") [Table Expressions, Side Effects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_exp_side_effect_abexa.htm)