# ABAP - Keyword Documentation / ABAP - Reference / Predefined Types, Data Objects, Functions, and Constructors / Built-In Functions

Included pages: 3


### abenbuilt_in_functions.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Predefined Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in.htm) → 

Built-In Functions

ABAP provides a set of built-in functions. A built-in function returns a return value for one or more arguments. Built-in functions can be called by functions in certain operand positions.

Built-in functions can be called functionally in [certain operand positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands_expressions.htm). When a built-in function is called in an [operand position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpression_positions.htm), the function is executed before the operand is used and the return value of the built-in function is used as the operand, in accordance with its data type.

-   [Built-In Functions - Syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_functions_syntax.htm)

-   [Built-In Functions - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_functions_overview.htm)

Continue
[Built-In Functions - Syntax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_functions_syntax.htm)
[Predefined Functions - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_functions_overview.htm)


### abenbuilt_in_functions_syntax.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Predefined Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in.htm) →  [Built-In Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_functions.htm) → 

Built-In Functions - Syntax

-   [Functions with an Unnamed Argument](#@@ITOC@@ABENBUILT_IN_FUNCTIONS_SYNTAX_1)

-   [Functions with Named Arguments](#@@ITOC@@ABENBUILT_IN_FUNCTIONS_SYNTAX_2)

-   [Obscuring with Methods](#@@ITOC@@ABENBUILT_IN_FUNCTIONS_SYNTAX_3)

In functions with named arguments, there is usually a main argument val and additional, possibly also optional, arguments. The following sections show the general syntax for calling built-in functions.

Functions with an Unnamed Argument

Syntax

... func( arg ) ...

The syntax for functions with an unnamed argument is the same as the syntax for calling functional methods with an input parameter. func is the built-in function and the argument arg is an operand whose data type matches the function. The blanks after the opening parentheses and before the closing parentheses are relevant.

Example

The built-on function [line\_exists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenline_exists_function.htm) has an unnamed argument that expects a table expression.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
...
IF line\_exists( itab\[ 1 \] ).
  ...
ENDIF.

Functions with Named Arguments

Syntax

... func( val = arg p1 = arg1 p2 = arg2 ... ) ...

Functions with one or more named arguments are bound to keyword parameters in the same way as when functional methods are called with multiple input parameters. Operands can be specified for the arguments whose data type matches the corresponding parameter. The blanks after the opening parentheses and before the closing parentheses are relevant. If one of these functions only has one argument or only the main argument is to be populated, the syntax can be simplified as follows:

... func( arg ) ...

Example

The built-in function [condense](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencondense_functions.htm) has named arguments and can, for example, be called as follows.

DATA(str1) = condense( \`...\` ).
DATA(str2) = condense( val = \`...\` ).
DATA(str3) = condense( val = \`...\`  del = \` \` ).

Obscuring with Methods

Within a class, a built-in function is always obscured by [methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_glosry.htm "Glossary Entry") of the class if they have the same name, regardless of the number and type of arguments in the function. The function is also obscured regardless of the number and type of method parameters. This also takes place in method calls for which no selector \=> or \-> is specified in front of the method name:

-   A [static method](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_method_glosry.htm "Glossary Entry") obscures a built-in function with the same name in all methods of the associated class.

-   An [instance method](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninstance_method_glosry.htm "Glossary Entry") obscures a built-in function with the same name in the instance methods of the associated class.

Note

Methods should never be given the same name as a built-in function.

Example

The following class returns a syntax error. The strlen specified on the right side of the assignment indicates the method of the class and not the built-in function. It cannot be specified in this operand position since it is not a functional method with return code.

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


### abenbuilt_in_functions_overview.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Predefined Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in.htm) →  [Built-In Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_functions.htm) → 

Predefined Functions - Overview

The following tables show the predefined functions by purpose. Predefined functions are generally [processing functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocess_function_glosry.htm "Glossary Entry") or [description functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendescription_function_glosry.htm "Glossary Entry").

-   A processing function performs general processing and returns a return code according to its purpose.

-   A description function determines a property of an argument and usually returns this property as a numeric value.

Other functions are known as logical functions, which either evaluate a logical expression (Boolean functions) or return a truth value (predicate functions).

Logical Functions

Function

Meaning

[boolc](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboole_functions.htm), [boolx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboole_functions.htm), [xsdbool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboole_functions.htm)

Boolean functions

[contains](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencontains_functions.htm), [contains\_any\_of](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencontains_functions.htm), [contains\_any\_not\_of](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencontains_functions.htm)

Predicate functions for strings

[matches](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmatches_functions.htm)

Predicate function for strings

[line\_exists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenline_exists_function.htm)

Predicate function for internal tables

[→ More](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogic_functions.htm)

Numeric Functions

Function

Meaning

[abs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumerical_functions.htm), [ceil](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumerical_functions.htm), [floor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumerical_functions.htm), [frac](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumerical_functions.htm), [sign](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumerical_functions.htm), [trunc](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumerical_functions.htm)

General numeric functions

[ipow](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpower_function.htm)

Integer power function

[nmax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennmax_nmin_functions.htm), [nmin](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennmax_nmin_functions.htm)

Numeric extremum functions

[acos](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfloating_point_functions.htm), [asin](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfloating_point_functions.htm), [atan](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfloating_point_functions.htm), [cos](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfloating_point_functions.htm), [sin](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfloating_point_functions.htm), [tan](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfloating_point_functions.htm), [cosh](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfloating_point_functions.htm), [sinh](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfloating_point_functions.htm), [tanh](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfloating_point_functions.htm), [exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfloating_point_functions.htm), [log](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfloating_point_functions.htm), [log10](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfloating_point_functions.htm), [sqrt](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfloating_point_functions.htm)

Floating point functions

[round](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendec_floating_point_functions.htm), [rescale](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendec_floating_point_functions.htm)

Rounding functions

[→ More](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmathematical_functions.htm)

String Functions

Function

Meaning

[charlen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlength_functions.htm), [dbmaxlen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlength_functions.htm), [numofchar](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlength_functions.htm), [strlen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlength_functions.htm)

Length functions

[char\_off](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlength_functions_args.htm)

Length function

[cmax](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencmax_cmin_functions.htm), [cmin](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencmax_cmin_functions.htm)

Character-like extremum value functions

[count](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencount_functions.htm), [count\_any\_of](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencount_functions.htm), [count\_any\_not\_of](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencount_functions.htm)

Search functions

[distance](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendistance_functions.htm)

Similarity function

[condense](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencondense_functions.htm)

Condense function

[concat\_lines\_of](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconcatenation_functions.htm)

Concatenation function

[escape](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenescape_functions.htm)

Escape function

[find](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensearch_functions.htm), [find\_end](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensearch_functions.htm), [find\_any\_of](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensearch_functions.htm), [find\_any\_not\_of](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensearch_functions.htm)

Search functions

[insert](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninsert_functions.htm)

Insert function

[match](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmatch_functions.htm)

Substring function

[repeat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrepeat_functions.htm)

Repeat function

[replace](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreplace_functions.htm)

Replace function

[reverse](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreverse_functions.htm)

Reverse function

[Segment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensegment_functions.htm)

Segment function

[shift\_left](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshift_functions.htm), [shift\_right](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshift_functions.htm)

Shift functions

[substring](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubstring_functions.htm), [substring\_after](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubstring_functions.htm), [substring\_from](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubstring_functions.htm), [substring\_before](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubstring_functions.htm), [substring\_to](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubstring_functions.htm)

Substring functions

[to\_upper](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencase_functions.htm), [to\_lower](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencase_functions.htm), [to\_mixed](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencase_functions.htm), [from\_mixed](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencase_functions.htm)

Case functions

[translate](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentranslate_functions.htm)

Translation function

[→ More](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_functions.htm)

Byte String Functions

Function

Meaning

[xstrlen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendescriptive_functions_binary.htm)

Length function

[bit-set](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_functions.htm)

Bit function

[→ More](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbinary_functions.htm)

Table Functions

Function

Meaning

[lines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendescriptive_functions_table.htm)

Row function

[line\_index](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenline_index_function.htm)

Index function

[→ More](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_functions.htm)
