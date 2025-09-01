  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20fixed%20point%20arithmetic%2C%20ABENFIXED_POINT_ARITHMETIC_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

fixed point arithmetic

Calculation with [packed numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpacked_number_glosry.htm "Glossary Entry") ([data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_type_glosry.htm "Glossary Entry") [p](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_numeric.htm)). Is calculated with an internal accuracy of 31 or (if not sufficient) 63 [places](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenplace_glosry.htm "Glossary Entry"). [Decimal places](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendecimal_place_glosry.htm "Glossary Entry") are rounded arithmetically, if necessary. Places before the [decimal point](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendecimal_point_separat_glosry.htm "Glossary Entry") are never lost if a calculation is completed successfully. As a [program property](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_property_glosry.htm "Glossary Entry"), the fixed point arithmetic determines whether for numbers of type [p](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_numeric.htm) the decimal point is respected in operations or not. The disabling of this program property is [obsolete](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennon_fixed_point_obsolete.htm).

[→ More about](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarith_type.htm)