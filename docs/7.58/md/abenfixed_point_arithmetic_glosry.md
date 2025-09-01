  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20fixed%20point%20arithmetic%2C%20ABENFIXED_POINT_ARITHMETIC_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

fixed point arithmetic

Calculation with [packed numbers](javascript:call_link\('abenpacked_number_glosry.htm'\) "Glossary Entry") ([data type](javascript:call_link\('abendata_type_glosry.htm'\) "Glossary Entry") [p](javascript:call_link\('abenbuiltin_types_numeric.htm'\))). Is calculated with an internal accuracy of 31 or (if not sufficient) 63 [places](javascript:call_link\('abenplace_glosry.htm'\) "Glossary Entry"). [Decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry") are rounded arithmetically, if necessary. Places before the [decimal point](javascript:call_link\('abendecimal_point_separat_glosry.htm'\) "Glossary Entry") are never lost if a calculation is completed successfully. As a [program property](javascript:call_link\('abenprogram_property_glosry.htm'\) "Glossary Entry"), the fixed point arithmetic determines whether for numbers of type [p](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) the decimal point is respected in operations or not. The disabling of this program property is [obsolete](javascript:call_link\('abennon_fixed_point_obsolete.htm'\)).

[→ More about](javascript:call_link\('abenarith_type.htm'\))