---
title: "Syntax"
description: |
  ... LET var1 = rhs1<fs1> = wrexpr1 var2 = rhs2<fs2> = wrexpr2 ... IN ... Alternatives: 1. ... var = rhs ...(#!ABAP_ALTERNATIVE_1@1@) 2. ... <fs> = wrexp ...(#!ABAP_ALTERNATIVE_2@2@) Effect A LET expression defines variables var1, var2, ... or field symbols <fs1>,
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaplet.htm"
abapFile: "abaplet.htm"
keywords: ["do", "while", "if", "try", "method", "data", "types", "internal-table", "field-symbol", "abaplet"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Local Declarations in Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlocal_expr_declarations.htm) → 

let\_exp, LET ... IN

Syntax

... LET *{*var1 = rhs1*}**|**{*<fs1> = wrexpr1*}*
        *{*var2 = rhs2*}**|**{*<fs2> = wrexpr2*}* ... IN ...

Alternatives:

[1\. ... var = rhs ...](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... <fs> = wrexp ...](#!ABAP_ALTERNATIVE_2@2@)

Effect

A LET expression defines variables var1, var2, ... or field symbols <fs1>, <fs2>, ... as local helper fields in an expression and assigns values to them. The helper fields can be used from their declaration in the operand positions of the expression. There is no way of accessing a helper field statically outside of its expression. The documentation of each expression lists whether and in which lines it contains a LET expression. Any LET expressions in an expression or subexpression are evaluated first.

A helper field specified in a LET expression is valid in the context in which the LET expression is specified. This can be a full expression or just part of an expression. All helper fields of a full expression are in the same namespace. A previously specified helper field cannot be specified in a further LET expression of the same expression. Furthermore, the helper fields are in the same namespace as the data objects or field symbols of the current procedure or program. Helper fields cannot be defined in a LET expression if a data object or field symbol with the same name already exists in the procedure or program of the expression. Conversely, no data objects or field symbols with names assigned to helper fields can be declared after an expression with a LET expression.

When reusing helper fields in different expressions, the following applies:

-   If a helper field is defined for the first time in the current procedure or program, it is declared [inline](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninline_declarations.htm).
-   If a helper field in the current procedure or program is defined again in a LET expression of a different expression and the derived data type matches, the helper field is bound to this expression and can be used there.
-   If a helper field in the current procedure or program is defined again in a LET expression of a different expression and the derived data type does not match, the helper field cannot be used there and a syntax error occurs.

Hints

-   LET expressions can currently only be used in [constructor expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expressions.htm). Subexpressions in which LET expressions can be used are [iteration expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeniteration_expression_glosry.htm "Glossary Entry") using [FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfor.htm) and results specified after THEN and ELSE in the [conditional expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expression_glosry.htm "Glossary Entry") [COND](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expression_cond.htm) and [SWITCH](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconditional_expression_switch.htm).
-   In the assignment of a value operator VALUE to [structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_constructor_params_struc.htm) or [internal tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_constructor_params_itab.htm), values on the left side can be saved to helper fields using a LET expression before the left side is overwritten.
-   A helper field defined in a LET expression can be addressed dynamically in the entire current context. This is not recommended, however, since expressions should be free of side effects.
-   It is a good idea to use LET expressions whenever helper fields are required for performance (avoiding multiple calculations) or the readability of an expression or whenever values from the left side of an assignment in a VALUE operator are needed on the right side.

Executable Example

[LET expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlet_abexa.htm).

Alternative 1   

... var = rhs ...

Effect

Definition of a local helper variable var as a helper field in a LET expression. The value of the right side, rhs, is assigned to the helper variable as an initial value.

For the right side, rhs, the same can be specified as in a regular assignment using the [assignment operator \=](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenequals_operator.htm). The data type of the helper variable is determined from the right side, rhs, as when an inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_inline.htm) is specified on the left side of an assignment operator using the [assignment operator \=](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenequals_operator.htm). It must be possible to determine the data type completely from the right side to avoid syntax errors.

Hints

-   The helper variables declared in a LET expression generally keep the value defined by rhs while the expression is calculated. It is possible to change the value of a helper variable in the expression, for example by binding to a CHANGING parameter of a method, but this would be unusual.
-   The helper variables declared in a LET expression are a good example of where long [readable names](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentelling_names_guidl.htm "Guideline") are not necessary and can even harm readability. The helper variables can only be used in their own expression, which means that short identifiers, even single-character names, are enough.

Example

Definition of three local helper variables, x, y, and z, in a constructor expression to construct the values of a structure. The values of the helper variables are used for the structure components.

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

Definition of a local field symbol <fs> as a helper field in a LET expression. The result of the [writable expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwritable_expression_glosry.htm "Glossary Entry") wrexp is assigned to the field symbol. The same applies here as to assignments of writable expressions using [ASSIGN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_mem_area_writable_exp.htm), which means that only the expressions listed there can be specified. The typing of the field symbol depends on the type of wrexp and is performed in the same way as in inline declarations of a field symbol using the statement [FIELD-SYMBOL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfield-symbol_inline.htm).

Example

Definition of a field symbol and a variable as helper fields in a LET expression in a conversion expression. The lines of an internal table are assigned to the field symbol.

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
![Example](exa.gif "Example") [LET Expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlet_abexa.htm)