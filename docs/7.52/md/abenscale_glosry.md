  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

scaling

Property of a [decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry"). A decimal floating point number can be seen as an integer number of a predefined length that is scaled by dividing through a power of ten. This defines the number of [decimal places](javascript:call_link\('abenfractional_portion_glosry.htm'\) "Glossary Entry"). In this sense, the negative exponent of a decimal floating point number is called scaling that applies to the mantissa. For positive scaling, it is equivalent to the number of decimal places. Decimal floating point numbers with the same value can have different scaling. Operations on decimal floating point numbers usually are given the scaling and thus the number of decimal places. One [predefined function](javascript:call_link\('abenpredefined_function_glosry.htm'\) "Glossary Entry") for changing the scaling is [rescale](javascript:call_link\('abendec_floating_point_functions.htm'\)). See also [Precision](javascript:call_link\('abenprecision_glosry.htm'\) "Glossary Entry").