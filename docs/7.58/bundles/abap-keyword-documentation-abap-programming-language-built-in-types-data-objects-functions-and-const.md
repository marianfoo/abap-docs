# ABAP - Keyword Documentation / ABAP - Programming Language / Built-In Types, Data Objects, Functions, and Constructors / Built-In Functions

Included pages: 4


### abenbuilt_in_functions.htm

---
title: "Built-In Functions"
description: |
  ABAP provides a set of built-in functions. A built-in function returns a return value for one or more arguments. There are functions with exactly one unnamed argument and functions with one or more named arguments. Built-in functions can be called functionally in certain operand positions(https://
version: "7.58"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_functions.htm"
abapFile: "abenbuilt_in_functions.htm"
keywords: ["do", "if", "method", "data", "types", "abenbuilt", "functions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Built-In%20Functions%2C%20ABENBUILT_IN_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Built-In Functions

ABAP provides a set of built-in functions. A built-in function returns a return value for one or more arguments. There are functions with exactly one unnamed argument and functions with one or more named arguments.

Built-in functions can be called functionally in [certain operand positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperands_expressions.htm). When a built-in function is called in an [operand position](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexpression_positions.htm), the function is executed before the operand is used and the return value of the built-in function is used as the operand, in accordance with its data type.

-   [Syntax](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_functions_syntax.htm)
-   [Overview](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_functions_overview.htm)
-   [Obscuring with Methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_functions_hiding.htm)

Continue
[Built-In Functions, Syntax](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_functions_syntax.htm)
[Built-In Functions, Overview](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_functions_overview.htm)
[Built-In Functions, Hiding by Methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_functions_hiding.htm)


### abenbuilt_in_functions_syntax.htm

---
title: "Built-In Functions, Syntax"
description: |
  -   Functions with an Unnamed Argument(#abenbuilt-in-functions-syntax-1-------functions-with-named-arguments---@ITOC@@ABENBUILT_IN_FUNCTIONS_SYNTAX_2) In functions with named arguments, there is usually a main argument val and the option of specifying further arguments, some of which are optional.
version: "7.58"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_functions_syntax.htm"
abapFile: "abenbuilt_in_functions_syntax.htm"
keywords: ["do", "if", "try", "method", "data", "types", "abenbuilt", "functions", "syntax"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in.htm) →  [Built-In Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Built-In%20Functions%2C%20Syntax%2C%20ABENBUILT_IN_FUNCTIONS_SYNTAX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Built-In Functions, Syntax

-   [Functions with an Unnamed Argument](#abenbuilt-in-functions-syntax-1-------functions-with-named-arguments---@ITOC@@ABENBUILT_IN_FUNCTIONS_SYNTAX_2)

In functions with named arguments, there is usually a main argument val and the option of specifying further arguments, some of which are optional. The following sections show the general syntax for calling built-in functions.

Functions with an Unnamed Argument   

Syntax

... func( arg ) ...

In functions with an unnamed argument, the syntax is the same as the syntax for calling functional methods with one input parameter. func is the built-in function and the argument arg is an operand whose data type matches the function. The blanks after the opening parentheses and before the closing parentheses are relevant.

Example

The built-in function [line\_exists](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenline_exists_function.htm) has an unnamed argument that expects a table expression.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
...
IF line\_exists( itab\[ 1 \] ).
  ...
ENDIF.

Functions with Named Arguments   

Syntax

... func( val = arg p1 = arg1 p2 = arg2 ... ) ...

Functions with one or more named arguments are bound to [keyword parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenkeyword_parameter_glosry.htm "Glossary Entry") in the same way as when functional methods are called with multiple input parameters. Operands can be specified for the arguments whose data type matches the corresponding parameter. The blanks after the opening parentheses and before the closing parentheses are relevant. If such a function has only one argument, or if only the main argument is to be supplied, the syntax can be simplified as follows:

... func( arg ) ...

Example

The built-in function [condense](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencondense_functions.htm) has named arguments and can, for example, be called as follows.

FINAL(str1) = condense( \`...\` ).
FINAL(str2) = condense( val = \`...\` ).
FINAL(str3) = condense( val = \`...\`  del = \` \` ).


### abenbuilt_in_functions_overview.htm

---
title: "Built-In Functions, Overview"
description: |
  The following tables summarize the built-in functions by purpose. Built-in functions are generally processing functions(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocess_function_glosry.htm 'Glossary Entry') or description functions(https://help.sap.com/doc/abapdocu_758_inde
version: "7.58"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_functions_overview.htm"
abapFile: "abenbuilt_in_functions_overview.htm"
keywords: ["insert", "do", "if", "case", "try", "data", "types", "internal-table", "abenbuilt", "functions", "overview"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in.htm) →  [Built-In Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Built-In%20Functions%2C%20Overview%2C%20ABENBUILT_IN_FUNCTIONS_OVERVIEW%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Built-In Functions, Overview

The following tables summarize the built-in functions by purpose. Built-in functions are generally [processing functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocess_function_glosry.htm "Glossary Entry") or [description functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendescription_function_glosry.htm "Glossary Entry").

-   A processing function performs general processing and returns a return value according to its purpose.
-   A description function determines a property of an argument and usually returns this property as a numeric value.

These include the logical functions, which either evaluate a logical expression as Boolean functions or return a truth value as a predicate function.

Logical Functions   

Function

Meaning

[boolc](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenboole_functions.htm), [boolx](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenboole_functions.htm), [xsdbool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenboole_functions.htm)

Boolean functions

[contains](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencontains_functions.htm), [contains\_any\_of](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencontains_functions.htm), [contains\_any\_not\_of](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencontains_functions.htm)

Predicate functions for strings

[matches](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmatches_functions.htm)

Predicate function for strings

[line\_exists](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenline_exists_function.htm)

Predicate function for internal tables

[→ More about](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogic_functions.htm)

Numeric Functions   

Function

Meaning

[abs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennumerical_functions.htm), [ceil](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennumerical_functions.htm), [floor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennumerical_functions.htm), [frac](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennumerical_functions.htm), [sign](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennumerical_functions.htm), [trunc](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennumerical_functions.htm)

General numeric functions

[ipow](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpower_function.htm)

Integer power function

[nmax](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennmax_nmin_functions.htm), [nmin](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennmax_nmin_functions.htm)

Numeric extremum functions

[acos](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfloating_point_functions.htm), [asin](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfloating_point_functions.htm), [atan](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfloating_point_functions.htm), [cos](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfloating_point_functions.htm), [sin](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfloating_point_functions.htm), [tan](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfloating_point_functions.htm), [cosh](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfloating_point_functions.htm), [sinh](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfloating_point_functions.htm), [tanh](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfloating_point_functions.htm), [exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfloating_point_functions.htm), [log](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfloating_point_functions.htm), [log10](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfloating_point_functions.htm), [sqrt](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfloating_point_functions.htm)

Floating point functions

[round](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendec_floating_point_functions.htm), [rescale](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendec_floating_point_functions.htm)

Rounding functions

[→ More about](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmathematical_functions.htm)

String Functions   

Function

Meaning

[charlen](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlength_functions.htm), [dbmaxlen](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlength_functions.htm), [numofchar](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlength_functions.htm), [strlen](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlength_functions.htm)

Length functions

[char\_off](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlength_functions_args.htm)

Length function

[cmax](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencmax_cmin_functions.htm), [cmin](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencmax_cmin_functions.htm)

Character-like extremum value functions

[count](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencount_functions.htm), [count\_any\_of](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencount_functions.htm), [count\_any\_not\_of](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencount_functions.htm)

Search functions

[distance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendistance_functions.htm)

Similarity function

[condense](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencondense_functions.htm)

Condense function

[concat\_lines\_of](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconcatenation_functions.htm)

Concatenation function

[escape](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenescape_functions.htm)

Escape symbol function

[find](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensearch_functions.htm), [find\_end](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensearch_functions.htm), [find\_any\_of](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensearch_functions.htm), [find\_any\_not\_of](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensearch_functions.htm)

Search functions

[insert](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninsert_functions.htm)

Insert function

[match](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmatch_functions.htm)

Substring function

[repeat](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrepeat_functions.htm)

Repeat function

[replace](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreplace_functions.htm)

Replace function

[reverse](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreverse_functions.htm)

Reverse function

[segment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensegment_functions.htm)

Segment function

[shift\_left](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshift_functions.htm), [shift\_right](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshift_functions.htm)

Shift functions

[substring](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubstring_functions.htm), [substring\_after](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubstring_functions.htm), [substring\_from](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubstring_functions.htm), [substring\_before](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubstring_functions.htm), [substring\_to](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubstring_functions.htm)

Substring functions

[to\_upper](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencase_functions.htm), [to\_lower](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencase_functions.htm), [to\_mixed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencase_functions.htm), [from\_mixed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencase_functions.htm)

Case functions

[translate](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentranslate_functions.htm)

Translation function

[→ More about](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_functions.htm)

Byte String Functions   

Function

Meaning

[xstrlen](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendescriptive_functions_binary.htm)

Length function

[bit-set](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbit_functions.htm)

Bit function

[→ More about](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbinary_functions.htm)

Time Stamp Functions   

Function

Meaning

[utclong\_current](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenutclong_current.htm)

Current time stamp

[utclong\_add](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenutclong_add.htm)

Addition function for time stamps

[utclong\_diff](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenutclong_diff.htm)

Difference function for time stamps

[→ More about](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentimestamp_functions.htm)

Table Functions   

Function

Meaning

[lines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendescriptive_functions_table.htm)

Row function

[line\_index](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenline_index_function.htm)

Index function

[→ More about](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_functions.htm)


### abenbuilt_in_functions_hiding.htm

---
title: "Built-In Functions, Hiding by Methods"
description: |
  Within a class, a built-in function is always hidden by methods(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmethod_glosry.htm 'Glossary Entry') of the class if they have the same name, regardless of the number and type of its arguments. The function is also hidden regardless of
version: "7.58"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_functions_hiding.htm"
abapFile: "abenbuilt_in_functions_hiding.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "abenbuilt", "functions", "hiding"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in.htm) →  [Built-In Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Built-In%20Functions%2C%20Hiding%20by%20Methods%2C%20ABENBUILT_IN_FUNCTIONS_HIDING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

Built-In Functions, Hiding by Methods

Within a class, a built-in function is always hidden by [methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmethod_glosry.htm "Glossary Entry") of the class if they have the same name, regardless of the number and type of its arguments. The function is also hidden regardless of the number and type of method parameters. This especially takes place in method calls for which no selector \=> or \-> is specified in front of the method name:

-   A [static method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstatic_method_glosry.htm "Glossary Entry") hides a built-in function with the same name in all methods of the associated class.
-   An [instance method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninstance_method_glosry.htm "Glossary Entry") hides a built-in function with the same name in the instance methods of the associated class.

The function is hidden regardless of the operand position. More specifically, any built-in functions called as arguments of other functions are also hidden.

Hint

Methods should never be given the same name as a built-in function.

Example

The following class returns a syntax error. The specification of strlen on the right side of the assignment addresses the method of the class and not the built-in function. It cannot be specified in this operand position since it is not a functional method with a return value.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
    CLASS-METHODS strlen IMPORTING text TYPE string
                         EXPORTING len  TYPE i.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(len) = strlen( \`xxx\` ).
  ENDMETHOD.
  METHOD strlen.
    ...
  ENDMETHOD.
ENDCLASS.
