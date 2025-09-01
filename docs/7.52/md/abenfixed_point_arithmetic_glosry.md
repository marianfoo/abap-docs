  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_glossary.htm) → 

fixed point arithmetic

Calculation using [packed numbers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpacked_number_glosry.htm "Glossary Entry") ([data type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_type_glosry.htm "Glossary Entry") [p](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm)). Is calculated with an internal accuracy of 31 or (if not sufficient) 63 [places](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenplace_glosry.htm "Glossary Entry"). [Decimal places](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfractional_portion_glosry.htm "Glossary Entry") are rounded commercially, if necessary. Places before the [decimal point](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendecimal_point_separat_glosry.htm "Glossary Entry") are never lost if a calculation is completed successfully. As a [program attribute](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_attribute_glosry.htm "Glossary Entry"), fixed point arithmetic determines whether for numbers of type [p](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm) the decimal point is respected by operations or not. The disabling of this program attribute is [obsolete](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_fixed_point_obsolete.htm).

[→ More](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarith_type.htm)