  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-75.htm) →  [Changes in Release 7.50](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-750.htm) → 

Data Types and ABAP Dictionary in Release 7.50

[1\. New built-in ABAP type int8](#!ABAP_MODIFICATION_1@1@)
[2\. Global temporary tables](#!ABAP_MODIFICATION_2@2@)
[3\. Replacement objects](#!ABAP_MODIFICATION_3@3@)
[4\. Value ranges of domains](#!ABAP_MODIFICATION_4@4@)

Modification 1

New Built-In ABAP Type int8

The new built-in data type [int8](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuiltin_types_numeric.htm) enables 8-byte integers with signs to be declared.

-   The associated data type in ABAP Dictionary was introduced with the name [INT8](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm).

-   The [value range](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuiltin_types_numeric.htm) of the new data type int8 is -9,223,372,036,854,775,808 to +9,223,372,036,854,775,807.

-   Apart from the extended value range, the new data type int8 has the same properties as the existing data type [i](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuiltin_types_numeric.htm) for 4-byte integers, with the following exceptions:

-   The [alignment required](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenalignment.htm) for data objects of type int8 is an address divisible by 8.

-   The value of the [output length](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwrite_output_length.htm) of data objects of type int8 is 20.

-   A new [calculation type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarith_type.htm) has been introduced for int8, situated between i and p in the hierarchy.
    

Modification 2

Global Temporary Tables

Database tables in ABAP Dictionary can be defined using the table category [global temporary table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_gtt.htm). A global temporary table (GTT) can only be filled with temporary data during a database LUW. When a GTT is filled using ABAP SQL, it must be emptied again explicitly before the next implicit database commit. If not, a non-handleable exception is raised.

Modification 3

Replacement Objects

A CDS can be assigned as a [replacement object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_replacement_objects.htm) to a transparent database table or a classic database view. In ABAP SQL reads, the replacement object is then accessed instead of the original object.

Modification 4

Value Ranges of Domains

When the [value range of a domain](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains_sema.htm) is defined, the data types INT1, INT2, and INT4 are now checked (like INT8) to determine whether the fixed values and interval boundaries are valid values, that is, that they lie within the [value range](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) defined by the technical attributes. Existing domains with invalid value ranges must be corrected.