  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

scaling

Property of a [decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry"). A decimal floating point number can be seen as an integer number of a predefined length that is scaled by dividing through a power of ten. This defines the number of [decimal places](javascript:call_link\('abenfractional_portion_glosry.htm'\) "Glossary Entry"). In this sense, the negative exponent of a decimal floating point number is called the scale that applies to the mantissa. If the scale is positive, it is equivalent to the number of decimal places. Decimal floating point numbers with the same value can have different scales. Operations on decimal floating point numbers are usually given the scale and thus the number of decimal places. One [built-in function](javascript:call_link\('abenpredefined_function_glosry.htm'\) "Glossary Entry") for changing the scale is [rescale](javascript:call_link\('abendec_floating_point_functions.htm'\)). See also [precision](javascript:call_link\('abenprecision_glosry.htm'\) "Glossary Entry").