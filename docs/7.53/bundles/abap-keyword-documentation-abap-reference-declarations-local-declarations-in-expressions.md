# ABAP Keyword Documentation / ABAP − Reference / Declarations / Local Declarations in Expressions

Included pages: 4


### abenlocal_expr_declarations.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) → 

Local Declarations in Expressions

In most [constructor expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), variables and field symbols can be used as local helper fields. They are defined using the language element LET in a

-   [LET expression let\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaplet.htm)

LET expressions can be used in the following constructor expressions:

-   [NEW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_new.htm)

-   [Single values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennew_constructor_params_single.htm)

-   [Structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennew_constructor_params_struct.htm)

-   [Internal tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennew_constructor_params_itab.htm)

-   [Classes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennew_constructor_params_class.htm)

-   [VALUE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_value.htm)

-   [Structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_constructor_params_struc.htm)

-   [Internal tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_constructor_params_itab.htm)

-   [CONV](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_conv.htm)

-   [CAST](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_cast.htm)

-   [EXACT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_exact.htm)

-   [REDUCE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_reduce.htm)

-   [COND](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expression_cond.htm)

-   [SWITCH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expression_switch.htm)

LET expressions are also possible in all iteration expressions with [FOR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfor.htm).

Continue
[let\_exp - LET ... IN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaplet.htm)


### abaplet.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Local Declarations in Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlocal_expr_declarations.htm) → 

let\_exp - LET ... IN

Syntax

... LET *{*var1 = rhs1*}**|**{*<fs1> = wrexpr1*}*
        *{*var2 = rhs2*}**|**{*<fs2> = wrexpr2*}* ... IN ...

Alternatives:

[1\. ... var = rhs ...](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... <fs> = wrexp ...](#!ABAP_ALTERNATIVE_2@2@)

Effect

A LET expression defines variables var1, var2, ... or field symbols <fs1>, <fs2>, ... as local helper fields in an expression and assigns values to them. When declared, the helper fields can be used in the operand positions of the expression. There is no way of accessing a helper field statically outside its expression. The documentation of an expression specifies whether it contains a LET expression and in which positions. Any LET expressions in an expression or subexpression are evaluated first.

A helper field specified in a LET expression is valid in the context in which the LET expression is specified. This can be a full expression or just part of an expression. All helper fields of a full expression are in the same namespace. A previously specified helper field can be specified in a further LET expression of the same expression. Furthermore, the helper fields are in the same namespace as the data objects or field symbols of the current procedure or program. Helper fields cannot be defined in a LET expression if a data object or field symbol with the same name already exists in the procedure or program of the expression. Conversely, no data objects or field symbols with names given to helper fields can be declared after an expression with a LET expression.

When reusing helper fields in different expressions, the following applies:

-   If a helper field is defined for the first time in the current procedure or program, it is declared [inline](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninline_declarations.htm).
    
-   If a helper field in the current procedure or program is defined again in a LET expression in a different expression and the derived data type matches, the helper field is bound to this expression and can be used there.
    
-   If a helper field in the current procedure or program is defined again in a LET expression in a different expression and the derived data type does not match, the helper field cannot be used there and a syntax error occurs.
    

Notes

-   LET expressions can currently only be used in [constructor expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expressions.htm). Subexpressions in which LET expressions can be used are [iteration expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeniteration_expression_glosry.htm "Glossary Entry") using [FOR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfor.htm) and with results specified after THEN and ELSE in the [conditional expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expression_glosry.htm "Glossary Entry") [COND](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expression_cond.htm) and [SWITCH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expression_switch.htm).
    
-   In the assignment of a value operator VALUE to [structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_constructor_params_struc.htm) or [internal tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_constructor_params_itab.htm), values from the left side can be saved to helper fields using a LET expression before the left side is overwritten.
    
-   A helper field defined in a LET expression can be addressed dynamically in the entire current context. This is not recommended, however, since expressions are not supposed to produce side effects.
    
-   It is a good idea to use LET expressions whenever helper fields are required for performance reasons (by avoiding multiple calculations) or the readability of an expression or whenever values from the left side of an assignment in a VALUE operator are needed on the right side.
    

Executable Example

[LET expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlet_abexa.htm).

Alternative 1

... var = rhs ...

Effect

Defines a local helper variable var as a helper field in a LET expression. The value of the right side, rhs, is assigned to the helper variable as an initial value.

For the right side, rhs, the same can be specified as in a regular assignment using the [assignment operator \=](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_operator.htm). The data type of the helper variable is determined from the right side, rhs, in exactly the same way as when an inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_inline.htm) is specified on the left side of an assignment operator using the [assignment operator \=](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_operator.htm). It must be possible to determine the data type in full from the right side to avoid syntax errors.

Notes

-   The helper variables declared in a LET expression generally keep the value defined by rhs while the expression is being calculated. It is possible to modify the value of a helper variable in the expression, for example by binding to a CHANGING parameter of a method, but this would be unusual.
    
-   The helper variables declared in a LET expression are a good example of where long [readable names](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentelling_names_guidl.htm "Guideline") are not necessary and can even harm readability. The helper variables can only be used in their own expression, which means that short names (possibly even single-character names) are enough.
    

Example

Defines three local helper variables, x, y, and z, in a constructor expression to construct the values of a structure. The values of the helper variables are used for the structure components.

TYPES:
   BEGIN OF struc,
     col1 TYPE i,
     col2 TYPE i,
   END OF struc.
DATA(rnd) = cl\_abap\_random\_int=>create(
  seed = CONV i( sy-uzeit ) min = 1 max = 10 ).
DO 5 TIMES.
  DATA(struc) = VALUE struc(
    LET x = rnd->get\_next( )
        y = x \* x
        z = sy-index \* 1000 IN col1 = x + z
                               col2 = y + z ).
  cl\_demo\_output=>write( struc ).
ENDDO.
cl\_demo\_output=>display( ).

Alternative 2

... <fs> = wrexp ...

Effect

Defines a local field symbol <fs> as a helper field in a LET expression. Here, the result of the [writable expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwritable_expression_glosry.htm "Glossary Entry") wrexp is assigned to the field symbol. The same applies here as in assignments of writable expressions using [ASSIGN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_mem_area_writable_exp.htm), which means that only the expressions specified there can be used. The typing of the field symbol is determined by the type of wrexp and is performed in the same way as in inline declarations of a field symbol using the statement [FIELD-SYMBOL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfield-symbol_inline.htm).

Example

Defines a field symbol and a variable as helper fields in a LET expression in a conversion expression. The rows of an internal table are assigned to the field symbol.

TYPES:
   BEGIN OF date,
     year  TYPE c LENGTH 4,
     month TYPE c LENGTH 2,
     day   TYPE c LENGTH 2,
   END OF date,
   dates TYPE TABLE OF date WITH EMPTY KEY.
DATA(dates) = VALUE dates(
  ( year = '2013' month = '07' day = '16' )
  ( year = '2014' month = '08' day = '31' )
  ( year = '2015' month = '09' day = '07' ) ).
DO lines( dates ) TIMES.
  DATA(isodate) = CONV string(
    LET <date>  = dates\[ sy-index \]
        sep   =   '-'
     IN  <date>-year && sep && <date>-month && sep && <date>-day  ).
  cl\_demo\_output=>write( isodate ).
ENDDO.
cl\_demo\_output=>display( ).

Continue
![Example](exa.gif "Example") [LET Expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlet_abexa.htm)


### abenlet_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Local Declarations in Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlocal_expr_declarations.htm) →  [let\_exp - LET ... IN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaplet.htm) → 

LET Expression

This example demonstrates a LET expression in a constructor expression.

Source Code

REPORT demo\_let\_it\_be.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES text TYPE STANDARD TABLE OF string WITH EMPTY KEY.
    cl\_demo\_output=>new( )->write(
     VALUE text( LET it = \`be\` IN
                   ( |To { it } is to do|          )
                   ( |To { it }, or not to { it }| )
                   ( |To do is to { it }|          )
                   ( |Do { it } do { it } do|      ) )
    )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

A constructor expression with the value operator [VALUE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_value.htm) constructs rows in an internal table. The value of the local helper variable it is passed to the table.


### abaplet.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Local Declarations in Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlocal_expr_declarations.htm) → 

let\_exp - LET ... IN

Syntax

... LET *{*var1 = rhs1*}**|**{*<fs1> = wrexpr1*}*
        *{*var2 = rhs2*}**|**{*<fs2> = wrexpr2*}* ... IN ...

Alternatives:

[1\. ... var = rhs ...](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... <fs> = wrexp ...](#!ABAP_ALTERNATIVE_2@2@)

Effect

A LET expression defines variables var1, var2, ... or field symbols <fs1>, <fs2>, ... as local helper fields in an expression and assigns values to them. When declared, the helper fields can be used in the operand positions of the expression. There is no way of accessing a helper field statically outside its expression. The documentation of an expression specifies whether it contains a LET expression and in which positions. Any LET expressions in an expression or subexpression are evaluated first.

A helper field specified in a LET expression is valid in the context in which the LET expression is specified. This can be a full expression or just part of an expression. All helper fields of a full expression are in the same namespace. A previously specified helper field can be specified in a further LET expression of the same expression. Furthermore, the helper fields are in the same namespace as the data objects or field symbols of the current procedure or program. Helper fields cannot be defined in a LET expression if a data object or field symbol with the same name already exists in the procedure or program of the expression. Conversely, no data objects or field symbols with names given to helper fields can be declared after an expression with a LET expression.

When reusing helper fields in different expressions, the following applies:

-   If a helper field is defined for the first time in the current procedure or program, it is declared [inline](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninline_declarations.htm).
    
-   If a helper field in the current procedure or program is defined again in a LET expression in a different expression and the derived data type matches, the helper field is bound to this expression and can be used there.
    
-   If a helper field in the current procedure or program is defined again in a LET expression in a different expression and the derived data type does not match, the helper field cannot be used there and a syntax error occurs.
    

Notes

-   LET expressions can currently only be used in [constructor expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expressions.htm). Subexpressions in which LET expressions can be used are [iteration expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeniteration_expression_glosry.htm "Glossary Entry") using [FOR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfor.htm) and with results specified after THEN and ELSE in the [conditional expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expression_glosry.htm "Glossary Entry") [COND](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expression_cond.htm) and [SWITCH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconditional_expression_switch.htm).
    
-   In the assignment of a value operator VALUE to [structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_constructor_params_struc.htm) or [internal tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_constructor_params_itab.htm), values from the left side can be saved to helper fields using a LET expression before the left side is overwritten.
    
-   A helper field defined in a LET expression can be addressed dynamically in the entire current context. This is not recommended, however, since expressions are not supposed to produce side effects.
    
-   It is a good idea to use LET expressions whenever helper fields are required for performance reasons (by avoiding multiple calculations) or the readability of an expression or whenever values from the left side of an assignment in a VALUE operator are needed on the right side.
    

Executable Example

[LET expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlet_abexa.htm).

Alternative 1

... var = rhs ...

Effect

Defines a local helper variable var as a helper field in a LET expression. The value of the right side, rhs, is assigned to the helper variable as an initial value.

For the right side, rhs, the same can be specified as in a regular assignment using the [assignment operator \=](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_operator.htm). The data type of the helper variable is determined from the right side, rhs, in exactly the same way as when an inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_inline.htm) is specified on the left side of an assignment operator using the [assignment operator \=](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenequals_operator.htm). It must be possible to determine the data type in full from the right side to avoid syntax errors.

Notes

-   The helper variables declared in a LET expression generally keep the value defined by rhs while the expression is being calculated. It is possible to modify the value of a helper variable in the expression, for example by binding to a CHANGING parameter of a method, but this would be unusual.
    
-   The helper variables declared in a LET expression are a good example of where long [readable names](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentelling_names_guidl.htm "Guideline") are not necessary and can even harm readability. The helper variables can only be used in their own expression, which means that short names (possibly even single-character names) are enough.
    

Example

Defines three local helper variables, x, y, and z, in a constructor expression to construct the values of a structure. The values of the helper variables are used for the structure components.

TYPES:
   BEGIN OF struc,
     col1 TYPE i,
     col2 TYPE i,
   END OF struc.
DATA(rnd) = cl\_abap\_random\_int=>create(
  seed = CONV i( sy-uzeit ) min = 1 max = 10 ).
DO 5 TIMES.
  DATA(struc) = VALUE struc(
    LET x = rnd->get\_next( )
        y = x \* x
        z = sy-index \* 1000 IN col1 = x + z
                               col2 = y + z ).
  cl\_demo\_output=>write( struc ).
ENDDO.
cl\_demo\_output=>display( ).

Alternative 2

... <fs> = wrexp ...

Effect

Defines a local field symbol <fs> as a helper field in a LET expression. Here, the result of the [writable expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwritable_expression_glosry.htm "Glossary Entry") wrexp is assigned to the field symbol. The same applies here as in assignments of writable expressions using [ASSIGN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_mem_area_writable_exp.htm), which means that only the expressions specified there can be used. The typing of the field symbol is determined by the type of wrexp and is performed in the same way as in inline declarations of a field symbol using the statement [FIELD-SYMBOL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfield-symbol_inline.htm).

Example

Defines a field symbol and a variable as helper fields in a LET expression in a conversion expression. The rows of an internal table are assigned to the field symbol.

TYPES:
   BEGIN OF date,
     year  TYPE c LENGTH 4,
     month TYPE c LENGTH 2,
     day   TYPE c LENGTH 2,
   END OF date,
   dates TYPE TABLE OF date WITH EMPTY KEY.
DATA(dates) = VALUE dates(
  ( year = '2013' month = '07' day = '16' )
  ( year = '2014' month = '08' day = '31' )
  ( year = '2015' month = '09' day = '07' ) ).
DO lines( dates ) TIMES.
  DATA(isodate) = CONV string(
    LET <date>  = dates\[ sy-index \]
        sep   =   '-'
     IN  <date>-year && sep && <date>-month && sep && <date>-day  ).
  cl\_demo\_output=>write( isodate ).
ENDDO.
cl\_demo\_output=>display( ).

Continue
![Example](exa.gif "Example") [LET Expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlet_abexa.htm)
