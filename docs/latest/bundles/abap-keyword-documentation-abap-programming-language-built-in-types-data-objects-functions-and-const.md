# ABAP - Keyword Documentation / ABAP - Programming Language / Built-In Types, Data Objects, Functions, and Constructors / Built-In Functions

Included pages: 4


### abenbuilt_in_functions.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Built-In Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Built-In%20Functions%2C%20ABENBUILT_IN_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Built-In Functions

ABAP provides a set of built-in functions. A built-in function returns a return value for one or more arguments. There are functions with exactly one unnamed argument and functions with one or more named arguments.

Built-in functions can be called functionally in [certain operand positions](javascript:call_link\('abenoperands_expressions.htm'\)). When a built-in function is called in an [operand position](javascript:call_link\('abenexpression_positions.htm'\)), the function is executed before the operand is used and the return value of the built-in function is used as the operand, in accordance with its data type.

-   [Syntax](javascript:call_link\('abenbuilt_in_functions_syntax.htm'\))
-   [Overview](javascript:call_link\('abenbuilt_in_functions_overview.htm'\))
-   [Obscuring with Methods](javascript:call_link\('abenbuilt_in_functions_hiding.htm'\))

Continue
[Built-In Functions, Syntax](javascript:call_link\('abenbuilt_in_functions_syntax.htm'\))
[Built-In Functions, Overview](javascript:call_link\('abenbuilt_in_functions_overview.htm'\))
[Built-In Functions, Hiding by Methods](javascript:call_link\('abenbuilt_in_functions_hiding.htm'\))


### abenbuilt_in_functions_syntax.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Built-In Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) →  [Built-In Functions](javascript:call_link\('abenbuilt_in_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Built-In%20Functions%2C%20Syntax%2C%20ABENBUILT_IN_FUNCTIONS_SYNTAX%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Built-In Functions, Syntax

-   [Functions with an Unnamed Argument](#@@ITOC@@ABENBUILT_IN_FUNCTIONS_SYNTAX_1)
-   [Functions with Named Arguments](#@@ITOC@@ABENBUILT_IN_FUNCTIONS_SYNTAX_2)

In functions with named arguments, there is usually a main argument val and the option of specifying further arguments, some of which are optional. The following sections show the general syntax for calling built-in functions.

Functions with an Unnamed Argument   

Syntax

... func( arg ) ...

In functions with an unnamed argument, the syntax is the same as the syntax for calling functional methods with one input parameter. func is the built-in function and the argument arg is an operand whose data type matches the function. The blanks after the opening parentheses and before the closing parentheses are relevant.

Example

The built-in function [line\_exists](javascript:call_link\('abenline_exists_function.htm'\)) has an unnamed argument that expects a table expression.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
...
IF line\_exists( itab\[ 1 \] ).
  ...
ENDIF.

Functions with Named Arguments   

Syntax

... func( val = arg p1 = arg1 p2 = arg2 ... ) ...

Functions with one or more named arguments are bound to [keyword parameters](javascript:call_link\('abenkeyword_parameter_glosry.htm'\) "Glossary Entry") in the same way as when functional methods are called with multiple input parameters. Operands can be specified for the arguments whose data type matches the corresponding parameter. The blanks after the opening parentheses and before the closing parentheses are relevant. If such a function has only one argument, or if only the main argument is to be supplied, the syntax can be simplified as follows:

... func( arg ) ...

Example

The built-in function [condense](javascript:call_link\('abencondense_functions.htm'\)) has named arguments and can, for example, be called as follows.

FINAL(str1) = condense( \`...\` ).
FINAL(str2) = condense( val = \`...\` ).
FINAL(str3) = condense( val = \`...\`  del = \` \` ).


### abenbuilt_in_functions_overview.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Built-In Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) →  [Built-In Functions](javascript:call_link\('abenbuilt_in_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Built-In%20Functions%2C%20Overview%2C%20ABENBUILT_IN_FUNCTIONS_OVERVIEW%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Built-In Functions, Overview

The following tables summarize the built-in functions by purpose. Built-in functions are generally [processing functions](javascript:call_link\('abenprocess_function_glosry.htm'\) "Glossary Entry") or [description functions](javascript:call_link\('abendescription_function_glosry.htm'\) "Glossary Entry").

-   A processing function performs general processing and returns a return value according to its purpose.
-   A description function determines a property of an argument and usually returns this property as a numeric value.

These include the logical functions, which either evaluate a logical expression as Boolean functions or return a truth value as a predicate function.

Logical Functions   

Function

Meaning

[boolc](javascript:call_link\('abenboole_functions.htm'\)), [boolx](javascript:call_link\('abenboole_functions.htm'\)), [xsdbool](javascript:call_link\('abenboole_functions.htm'\))

Boolean functions

[contains](javascript:call_link\('abencontains_functions.htm'\)), [contains\_any\_of](javascript:call_link\('abencontains_functions.htm'\)), [contains\_any\_not\_of](javascript:call_link\('abencontains_functions.htm'\))

Predicate functions for strings

[matches](javascript:call_link\('abenmatches_functions.htm'\))

Predicate function for strings

[line\_exists](javascript:call_link\('abenline_exists_function.htm'\))

Predicate function for internal tables

[→ More about](javascript:call_link\('abenlogic_functions.htm'\))

Numeric Functions   

Function

Meaning

[abs](javascript:call_link\('abennumerical_functions.htm'\)), [ceil](javascript:call_link\('abennumerical_functions.htm'\)), [floor](javascript:call_link\('abennumerical_functions.htm'\)), [frac](javascript:call_link\('abennumerical_functions.htm'\)), [sign](javascript:call_link\('abennumerical_functions.htm'\)), [trunc](javascript:call_link\('abennumerical_functions.htm'\))

General numeric functions

[ipow](javascript:call_link\('abenpower_function.htm'\))

Integer power function

[nmax](javascript:call_link\('abennmax_nmin_functions.htm'\)), [nmin](javascript:call_link\('abennmax_nmin_functions.htm'\))

Numeric extremum functions

[acos](javascript:call_link\('abenfloating_point_functions.htm'\)), [asin](javascript:call_link\('abenfloating_point_functions.htm'\)), [atan](javascript:call_link\('abenfloating_point_functions.htm'\)), [cos](javascript:call_link\('abenfloating_point_functions.htm'\)), [sin](javascript:call_link\('abenfloating_point_functions.htm'\)), [tan](javascript:call_link\('abenfloating_point_functions.htm'\)), [cosh](javascript:call_link\('abenfloating_point_functions.htm'\)), [sinh](javascript:call_link\('abenfloating_point_functions.htm'\)), [tanh](javascript:call_link\('abenfloating_point_functions.htm'\)), [exp](javascript:call_link\('abenfloating_point_functions.htm'\)), [log](javascript:call_link\('abenfloating_point_functions.htm'\)), [log10](javascript:call_link\('abenfloating_point_functions.htm'\)), [sqrt](javascript:call_link\('abenfloating_point_functions.htm'\))

Floating point functions

[round](javascript:call_link\('abendec_floating_point_functions.htm'\)), [rescale](javascript:call_link\('abendec_floating_point_functions.htm'\))

Rounding functions

[→ More about](javascript:call_link\('abenmathematical_functions.htm'\))

String Functions   

Function

Meaning

[charlen](javascript:call_link\('abenlength_functions.htm'\)), [dbmaxlen](javascript:call_link\('abenlength_functions.htm'\)), [numofchar](javascript:call_link\('abenlength_functions.htm'\)), [strlen](javascript:call_link\('abenlength_functions.htm'\))

Length functions

[char\_off](javascript:call_link\('abenlength_functions_args.htm'\))

Length function

[cmax](javascript:call_link\('abencmax_cmin_functions.htm'\)), [cmin](javascript:call_link\('abencmax_cmin_functions.htm'\))

Character-like extremum value functions

[count](javascript:call_link\('abencount_functions.htm'\)), [count\_any\_of](javascript:call_link\('abencount_functions.htm'\)), [count\_any\_not\_of](javascript:call_link\('abencount_functions.htm'\))

Search functions

[distance](javascript:call_link\('abendistance_functions.htm'\))

Similarity function

[condense](javascript:call_link\('abencondense_functions.htm'\))

Condense function

[concat\_lines\_of](javascript:call_link\('abenconcatenation_functions.htm'\))

Concatenation function

[escape](javascript:call_link\('abenescape_functions.htm'\))

Escape symbol function

[find](javascript:call_link\('abensearch_functions.htm'\)), [find\_end](javascript:call_link\('abensearch_functions.htm'\)), [find\_any\_of](javascript:call_link\('abensearch_functions.htm'\)), [find\_any\_not\_of](javascript:call_link\('abensearch_functions.htm'\))

Search functions

[insert](javascript:call_link\('abeninsert_functions.htm'\))

Insert function

[match](javascript:call_link\('abenmatch_functions.htm'\))

Substring function

[repeat](javascript:call_link\('abenrepeat_functions.htm'\))

Repeat function

[replace](javascript:call_link\('abenreplace_functions.htm'\))

Replace function

[reverse](javascript:call_link\('abenreverse_functions.htm'\))

Reverse function

[segment](javascript:call_link\('abensegment_functions.htm'\))

Segment function

[shift\_left](javascript:call_link\('abenshift_functions.htm'\)), [shift\_right](javascript:call_link\('abenshift_functions.htm'\))

Shift functions

[substring](javascript:call_link\('abensubstring_functions.htm'\)), [substring\_after](javascript:call_link\('abensubstring_functions.htm'\)), [substring\_from](javascript:call_link\('abensubstring_functions.htm'\)), [substring\_before](javascript:call_link\('abensubstring_functions.htm'\)), [substring\_to](javascript:call_link\('abensubstring_functions.htm'\))

Substring functions

[to\_upper](javascript:call_link\('abencase_functions.htm'\)), [to\_lower](javascript:call_link\('abencase_functions.htm'\)), [to\_mixed](javascript:call_link\('abencase_functions.htm'\)), [from\_mixed](javascript:call_link\('abencase_functions.htm'\))

Case functions

[translate](javascript:call_link\('abentranslate_functions.htm'\))

Translation function

[→ More about](javascript:call_link\('abenstring_functions.htm'\))

Byte String Functions   

Function

Meaning

[xstrlen](javascript:call_link\('abendescriptive_functions_binary.htm'\))

Length function

[bit-set](javascript:call_link\('abenbit_functions.htm'\))

Bit function

[→ More about](javascript:call_link\('abenbinary_functions.htm'\))

Time Stamp Functions   

Function

Meaning

[utclong\_current](javascript:call_link\('abenutclong_current.htm'\))

Current time stamp

[utclong\_add](javascript:call_link\('abenutclong_add.htm'\))

Addition function for time stamps

[utclong\_diff](javascript:call_link\('abenutclong_diff.htm'\))

Difference function for time stamps

[→ More about](javascript:call_link\('abentimestamp_functions.htm'\))

Table Functions   

Function

Meaning

[lines](javascript:call_link\('abendescriptive_functions_table.htm'\))

Row function

[line\_index](javascript:call_link\('abenline_index_function.htm'\))

Index function

[→ More about](javascript:call_link\('abentable_functions.htm'\))


### abenbuilt_in_functions_hiding.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Built-In Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) →  [Built-In Functions](javascript:call_link\('abenbuilt_in_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Built-In%20Functions%2C%20Hiding%20by%20Methods%2C%20ABENBUILT_IN_FUNCTIONS_HIDING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

Built-In Functions, Hiding by Methods

Within a class, a built-in function is always hidden by [methods](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry") of the class if they have the same name, regardless of the number and type of its arguments. The function is also hidden regardless of the number and type of method parameters. This especially takes place in method calls for which no selector \=> or \-> is specified in front of the method name:

-   A [static method](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry") hides a built-in function with the same name in all methods of the associated class.
-   An [instance method](javascript:call_link\('abeninstance_method_glosry.htm'\) "Glossary Entry") hides a built-in function with the same name in the instance methods of the associated class.

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
