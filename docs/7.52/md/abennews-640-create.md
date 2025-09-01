  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-6.htm) →  [Changes in Release 6.40](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-640.htm) → 

Object Creation in Release 6.40

[1\. Reference to a type description object in CREATE DATA](#!ABAP_MODIFICATION_1@1@)
[
2\. Any reference type in CREATE DATA](#!ABAP_MODIFICATION_2@2@)
[
3\. Reference to a generic table type in CREATE DATA](#!ABAP_MODIFICATION_3@3@)

Modification 1

Reference to a type description object in CREATE DATA

With the new addition of [HANDLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data_handle.htm) to the [CREATE DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data.htm) statement, you can refer to [RTTS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrtts_glosry.htm "Glossary Entry") [type description objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_object_glosry.htm "Glossary Entry") during the creation of data objects.

From Release 6.40, the RTTS classes contain methods for creating type description objects independently of existing types (refer to [Runtime Type Services for Release 6.40](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-640-rtti.htm)). Together with the addition HANDLE, this allows the dynamic construction of any type of data objects for the program runtime.

Modification 2

Any reference type in CREATE DATA

In the statement
[CREATE DATA dref TYPE REF TO (name).](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data_reference.htm)
you can now also enter a data type in name. Previously, it was only possible to enter classes and interfaces.

Note

This change was also transported to Release 6.20.

Modification 3

Reference to a generic table type in CREATE DATA

Previously, in [CREATE DATA - TYPE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data_existing.htm), you could only enter non-generic table types. As of Release 6.40, table types with generic keys can also be entered. In this case, a new linked table type with a standard key is created and used.