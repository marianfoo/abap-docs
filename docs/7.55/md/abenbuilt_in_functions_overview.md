  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in.htm) →  [Built-In Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in_functions.htm) → 

Built-In Functions, Overview

The following tables summarize the built-in functions by purpose. Built-in functions are generally [processing functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprocess_function_glosry.htm "Glossary Entry") or [description functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendescription_function_glosry.htm "Glossary Entry").

-   A processing function performs general processing and returns a return value according to its purpose.

-   A description function determines a property of an argument and usually returns this property as a numeric value.

These include the logical functions, which either evaluate a logical expression as Boolean functions or return a truth value as a predicate function.

Logical Functions

Function

Meaning

[boolc](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenboole_functions.htm), [boolx](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenboole_functions.htm), [xsdbool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenboole_functions.htm)

Boolean functions

[contains](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencontains_functions.htm), [contains\_any\_of](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencontains_functions.htm), [contains\_any\_not\_of](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencontains_functions.htm)

Predicate functions for strings

[matches](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmatches_functions.htm)

Predicate function for strings

[line\_exists](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenline_exists_function.htm)

Predicate function for internal tables

[→ More about](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogic_functions.htm)

Numeric Functions

Function

Meaning

[abs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumerical_functions.htm), [ceil](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumerical_functions.htm), [floor](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumerical_functions.htm), [frac](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumerical_functions.htm), [sign](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumerical_functions.htm), [trunc](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumerical_functions.htm)

General numeric functions

[ipow](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpower_function.htm)

Integer power function

[nmax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennmax_nmin_functions.htm), [nmin](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennmax_nmin_functions.htm)

Numeric extremum functions

[acos](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfloating_point_functions.htm), [asin](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfloating_point_functions.htm), [atan](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfloating_point_functions.htm), [cos](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfloating_point_functions.htm), [sin](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfloating_point_functions.htm), [tan](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfloating_point_functions.htm), [cosh](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfloating_point_functions.htm), [sinh](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfloating_point_functions.htm), [tanh](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfloating_point_functions.htm), [exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfloating_point_functions.htm), [log](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfloating_point_functions.htm), [log10](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfloating_point_functions.htm), [sqrt](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfloating_point_functions.htm)

Floating point functions

[round](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendec_floating_point_functions.htm), [rescale](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendec_floating_point_functions.htm)

Rounding functions

[→ More about](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmathematical_functions.htm)

String Functions

Function

Meaning

[charlen](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlength_functions.htm), [dbmaxlen](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlength_functions.htm), [numofchar](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlength_functions.htm), [strlen](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlength_functions.htm)

Length functions

[char\_off](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlength_functions_args.htm)

Length function

[cmax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencmax_cmin_functions.htm), [cmin](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencmax_cmin_functions.htm)

Character-like extremum value functions

[count](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencount_functions.htm), [count\_any\_of](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencount_functions.htm), [count\_any\_not\_of](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencount_functions.htm)

Search functions

[distance](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendistance_functions.htm)

Similarity function

[condense](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencondense_functions.htm)

Condense function

[concat\_lines\_of](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconcatenation_functions.htm)

Concatenation function

[escape](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenescape_functions.htm)

Escape symbol function

[find](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensearch_functions.htm), [find\_end](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensearch_functions.htm), [find\_any\_of](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensearch_functions.htm), [find\_any\_not\_of](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensearch_functions.htm)

Search functions

[insert](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninsert_functions.htm)

Insert function

[match](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmatch_functions.htm)

Substring function

[repeat](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrepeat_functions.htm)

Repeat function

[replace](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreplace_functions.htm)

Replace function

[reverse](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreverse_functions.htm)

Reverse function

[segment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensegment_functions.htm)

Segment function

[shift\_left](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshift_functions.htm), [shift\_right](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshift_functions.htm)

Shift functions

[substring](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubstring_functions.htm), [substring\_after](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubstring_functions.htm), [substring\_from](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubstring_functions.htm), [substring\_before](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubstring_functions.htm), [substring\_to](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubstring_functions.htm)

Substring functions

[to\_upper](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencase_functions.htm), [to\_lower](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencase_functions.htm), [to\_mixed](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencase_functions.htm), [from\_mixed](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencase_functions.htm)

Case functions

[translate](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentranslate_functions.htm)

Translation function

[→ More about](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions.htm)

Byte String Functions

Function

Meaning

[xstrlen](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendescriptive_functions_binary.htm)

Length function

[bit-set](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbit_functions.htm)

Bit function

[→ More about](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbinary_functions.htm)

Time Stamp Functions

Function

Meaning

[utclong\_current](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenutclong_current.htm)

Current time stamp

[utclong\_add](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenutclong_add.htm)

Addition function for time stamps

[utclong\_diffs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenutclong_diff.htm)

Difference function for time stamps

[→ More about](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentimestamp_functions.htm)

Table Functions

Function

Meaning

[lines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendescriptive_functions_table.htm)

Row function

[line\_index](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenline_index_function.htm)

Index function

[→ More about](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_functions.htm)