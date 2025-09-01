  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_and_objects.htm) →  [Types and Objects - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_objects_oview.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects.htm) →  [Memory Management of Deep Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory_consumption.htm) → 

Maximum Size of Dynamic Data Objects

In addition to the maximum memory size that the current [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry") can request for [dynamic data objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynamic_data_object_glosry.htm "Glossary Entry"), their maximum size is limited by the following factors:

-   An upper limit for the amount of digits in strings and rows in internal tables results from the fact that they are adressed internally and in ABAP statements using 4 byte integers, which limits them to 2147483647.

-   The size of strings and hashed tables is limited by the biggest memory block that can be requested in one chunk. This is a maximum of 2 GB and is usually further limited using the [profile parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") ztta/max\_memreq\_MB. For strings, the value of the profile parameter directly represents the maximum size that can be occupied. The maximum amount of rows in hashed tables depends on the required size of the hash administration that has to be stored there. Currently, it can be calculated from the largest power of two that fits into the value of the profile parameter divided by 8. For example, if the profile parameter specifies 250 MB, a hashed table can contain a maximum of roughly 16 million entries (128 times 1024 to the power of two divided by 8).

The actual maximum size is generally less than given by the above limits, since the overall available memory is normally not only used by a string or an internal table.

Note

If there is only little memory space available, it may be better to use an internal table, because its memory space is requested in blocks, while the entire memory space required for a string must always be free as a whole.