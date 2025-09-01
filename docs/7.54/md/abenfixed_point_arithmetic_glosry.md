  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

fixed point arithmetic

Calculation using [packed numbers](javascript:call_link\('abenpacked_number_glosry.htm'\) "Glossary Entry") ([data type](javascript:call_link\('abendata_type_glosry.htm'\) "Glossary Entry") [p](javascript:call_link\('abenbuiltin_types_numeric.htm'\))). Is calculated with an internal accuracy of 31 or (if not sufficient) 63 [places](javascript:call_link\('abenplace_glosry.htm'\) "Glossary Entry"). [Decimal places](javascript:call_link\('abenfractional_portion_glosry.htm'\) "Glossary Entry") are rounded commercially, if necessary. Places before the [decimal point](javascript:call_link\('abendecimal_point_separat_glosry.htm'\) "Glossary Entry") are never lost if a calculation is completed successfully. As a [program attribute](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry"), fixed point arithmetic determines whether for numbers of type [p](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) the decimal point is respected by operations or not. The disabling of this program attribute is [obsolete](javascript:call_link\('abennon_fixed_point_obsolete.htm'\)).

[→ More](javascript:call_link\('abenarith_type.htm'\))