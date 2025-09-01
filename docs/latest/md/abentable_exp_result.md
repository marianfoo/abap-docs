  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_expr_func.htm) →  [itab - Table Expressions (table\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expressions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20table_exp%20-%20Result%2C%20ABENTABLE_EXP_RESULT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

table\_exp - Result

Syntax

... *{*             itab\[ [itab\_line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_itab_line.htm) \][*\[*...*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_chaining.htm) *}*
  *|* *{* VALUE type( itab\[ [itab\_line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_itab_line.htm) \][*\[*...*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_chaining.htm) *\[* [default](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_optional_default.htm)*\]* ) *}*
  *|* *{* REF   type( itab\[ [itab\_line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_itab_line.htm) \][*\[*...*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_chaining.htm) *\[* [default](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_optional_default.htm)*\]*  ) *}* ...

Alternatives:

[1\. ... itab\[ ... \]*\[*...*\]*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... VALUE type( itab\[ ... \]*\[*...*\]* *\[*default*\]* )](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... REF type( itab\[ ... \]*\[*...*\]* *\[*default*\]* )](#!ABAP_ALTERNATIVE_3@3@)

Effect

If a [table expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expressions.htm) is specified in a [general expression position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") or in a [functional operand position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_position_glosry.htm "Glossary Entry"), the read line can be passed to this position in three different ways:

-   As a [field symbol](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfield_symbol_glosry.htm "Glossary Entry") to which the table line is assigned.
-   As a [work area](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwork_area_glosry.htm "Glossary Entry") that contains the content of the table line.
-   As a [data reference variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") that points to the table line.

The result of a table expression is only available temporarily. It is used as an operand of a statement and then deleted again. It is deleted when the current statement is closed or after the evaluation of a relational expression once the truth value is determined.

The ways of how a table expression is specified shown here determine how the table line is returned. A default value [default](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_optional_default.htm) can be specified for the result in two alternatives.

Alternative 1   

... itab\[ ... \]

Alternative 2   

... VALUE type( itab\[ ... \] *\[*default*\]* )

Effect

Both alternatives can be specified in all read positions for table expressions in which the line type matches the operand type (see also [Chainings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_chaining.htm)). The result is either a temporary field symbol, a temporary work area, or the value is assigned directly to a target variable. If the value operator VALUE is used, an optional default value [default](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_optional_default.htm) can be specified for cases where no table line is found.

-   If the table expression is not specified as an operand of the value operator [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_value.htm) or of the reference operator [REF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_ref.htm), the result is usually a temporary field symbol typed with the line type of the internal table and to which the table line found is assigned. For performance reasons, there are exceptions to this rule in the following cases:
    -   If the table expression is specified as the right side of an [assignment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenequals_operator.htm), the content of the table line or a [component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_chaining.htm) is assigned directly to the target variable instead of a temporary result being produced.
    -   If the line type of the internal table is flat and narrow and used directly in the operand position, for example as an operand of an arithmetic expression or as a formal parameter for an actual parameter where pass by value is declared, the result is a temporary work area.
-   If the table expression is specified as an operand of the value operator [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_value.htm), the result is always a temporary work area, unless the expression is specified as the right side of an [assignment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenequals_operator.htm). The data type of the work area is determined by specifying [type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_value.htm) for the constructor expression:
    
    -   If the # character is specified for type and the data type required in an operand position is known uniquely and completely, the operand type is used. Otherwise the line type of the internal table or of a [chaining](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_chaining.htm) specified here is applied.
    -   If a non-generic data type dtype is specified for type, the line type of the internal table must be compatible with this data type or be convertible to this data type. In this case, the temporary work area has the data type dtype and the data of the line found is converted to this data type, if necessary, in accordance with the [conversion rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_rule_glosry.htm "Glossary Entry").
    
    If the expression is specified as the right side of an [assignment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenequals_operator.htm), the content of the table line or [component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_chaining.htm) is also assigned directly when using VALUE.
    

In most cases, it is transparent and irrelevant, whether the result exists as a field symbol or as a work area. In some cases, however, performance reasons or to avoid side effects, it may be beneficial if the standard behavior is suspended and data is written explicitly to a temporary work area instead.

-   For notes about performance, see the programming guideline [Output Behavior](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_output_guidl.htm "Guideline"). This guideline should also be respected when using table expressions. In the [extended program checks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenextended_program_check_glosry.htm "Glossary Entry"), a syntax check warning, that can be hidden by a pragma occurs if the rule appears to be violated.
-   Side effects can occur if the line of the internal table to which the temporary field symbol points is modified while the binding to the field symbol persists.

Hints

-   A table expression whose result is a temporary field symbol can be viewed as a short form of the statement [READ TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table.htm) with the addition [ASSIGNING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_outdesc.htm) and a table expression whose result is a temporary work area can be viewed as a short form of this statement with the addition [INTO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_outdesc.htm). The corresponding rules and notes apply.
-   More specifically, [restrictions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_outdesc.htm) regarding the modification of key fields must be respected in write positions in the case of table expressions whose result is a temporary field symbol.
-   In variant 1, the compilation decides whether the result is a field symbol or a work area, not the table content at runtime.
-   [Chainings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_chaining.htm) of table expressions can also be specified as an argument of the value operator VALUE. This argument then controls the final result of the chaining.
-   Unlike when using the value operator [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_value.htm) for constructing values, elementary types or reference types can also be specified for table expressions for type.

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
    ...
  ENDMETHOD.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    FINAL(abcde) = 'abcdefghijklmnopqrstuvwxyz'.
    TYPES text TYPE c LENGTH 1000.
    DATA  itab TYPE TABLE OF i.
    DATA  jtab TYPE TABLE OF string.
    DATA  ktab TYPE TABLE OF text.
    FIELD-SYMBOLS <itab> TYPE INDEX TABLE.
    itab = VALUE #( ( 1 ) ).
    jtab = VALUE #( ( CONV string( abcde ) ) ).
    ktab = VALUE #( ( abcde ) ).
    FINAL(number) = itab\[ 1 \].
    FINAL(text)   = VALUE #( jtab\[ 1 \] ).
    class=>meth( p1 = itab\[ 1 \] )            ##operator.
    class=>meth( p2 = VALUE #( jtab\[ 1 \] ) ) ##operator.
    class=>meth( p3 = VALUE #( ktab\[ 1 \] ) ) ##operator.
    ASSIGN itab TO <itab>.
    class=>meth( p1 = <itab>\[ 1 \] ).
  ENDMETHOD.
ENDCLASS.

-   Temporary work areas are passed in the assignments to number and text. The VALUE operator of the second assignment expresses this explicitly, but is not necessary.
-   In the passes to the formal parameter of the method meth, the results are temporary field symbols by default. In two cases, the VALUE operator forces a work area explicitly. In the extended program checks, all passes produces syntax check warnings that can be hidden here using the pragma ##operator.
    -   In the pass to the formal parameter p1, using a field symbol by default is bad for performance, since the line is a flat narrow table line. The VALUE operator is recommended instead.
    -   In the pass to the formal parameter p2, specifying a work area explicitly is bad for performance, since the line is a deep table line. The VALUE operator is not recommended here.
    -   In the pass to the formal parameter p3, specifying a work area explicitly is bad for performance, since the line is a deep table line. The VALUE operator is not recommended here.
-   When specifying the internal table using a generically typed field symbol itab, using the temporary field symbol by default does not produce a syntax check warning, since no fixed work area can be derived here.

Executable Example

[Table Expressions, Side Effects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_side_effect_abexa.htm)

Alternative 3   

... REF type( itab\[ ... \] *\[*default*\]* )

Effect

This alternative can be specified in all read positions for table expressions in which a data reference variable with a suitable type is expected. If a table expression is used as an argument of a constructor expression with the reference operator [REF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_ref.htm), the result is a temporary data reference variable that points to the found table line. If no table line is found, an optional default value [default](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_optional_default.htm) can be specified.

The [static type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_type_glosry.htm "Glossary Entry") of the reference variable is determined by specifying [type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_ref.htm) for the constructor expression:

-   If the # character is specified for type, the line type of the internal table is used as the static type.
-   If a non-generic data type dtype or the generic data type [data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_generic.htm) is specified for type, they determine the static type of the result. A non-generic data type, dtype, must be compatible with the line type of the internal table.

If the reference operator [REF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_ref.htm) is specified in front of a [chaining](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_chaining.htm) whose result is a component of a structured table line, it creates a reference to this component. In this case, no substring accesses [+off(len)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoffset_length.htm) can be specified after the component.

Hints

-   A table expression whose result is a temporary data reference variable can be viewed as a short form of the statement [READ TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table.htm) with the addition [REFERENCE INTO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_outdesc.htm). The corresponding rules and notes apply.
-   More specifically, in the case of a table expression whose result is a temporary data reference variable, the [restrictions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_outdesc.htm) on the modification of key fields are respected when dereferencing write positions.
-   The static type of the temporary data reference variable can only be the line type of the internal table or be completely generic.
-   [Chainings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_chaining.htm) of table expressions can also be specified as an argument of the reference operator REF, which then controls the final result of the chaining.

Example

The following program corresponds to the example for [READ TABLE REFERENCE INTO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_outdesc.htm), but the statement READ has been replaced by a table expression in the constructor expression REF.

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
      FINAL(sflight\_ref) =
        REF #( sflight\_tab\[ KEY primary\_key
                            COMPONENTS carrid = carrid
                                       connid = connid
                                       fldate = fldate \] ).
      sflight\_ref->price \*= '0.9'.
    CATCH cx\_sy\_itab\_line\_not\_found.
      ...
  ENDTRY.
ENDIF.

Continue
![Example](exa.gif "Example") [table\_exp - Side Effects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_side_effect_abexa.htm)