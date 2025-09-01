  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for ABAP Release 7.50](javascript:call_link\('abennews-750.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Data%20Types%20and%20ABAP%20Dictionary%20in%20ABAP%20Release%207.50%2C%20ABENNEWS-750-TYPES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

Data Types and ABAP Dictionary in ABAP Release 7.50

[1\. New Built-In ABAP Type int8](#!ABAP_MODIFICATION_1@1@)
[2\. Global Temporary Tables](#!ABAP_MODIFICATION_2@2@)
[3\. Replacement Objects](#!ABAP_MODIFICATION_3@3@)
[4\. Value Ranges of Domains](#!ABAP_MODIFICATION_4@4@)

Modification 1   

New Built-In ABAP Type int8

The new built-in data type [int8](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) enables 8-byte integers with signs to be declared.

-   The associated data type in ABAP Dictionary was introduced with the name [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)).
-   The [value range](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) of the new data type int8 is -9,223,372,036,854,775,808 to +9,223,372,036,854,775,807.
-   Apart from the extended value range, the new data type int8 has the same properties as the existing data type [i](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) for 4-byte integers, with the following exceptions:
    -   The [alignment required](javascript:call_link\('abenalignment.htm'\)) for data objects of type int8 is an address divisible by 8.
    -   The value of the [output length](javascript:call_link\('abenwrite_output_length.htm'\)) of data objects of type int8 is 20.
    -   A new [calculation type](javascript:call_link\('abenarith_type.htm'\)) has been introduced for int8, situated between i and p in the hierarchy.

Modification 2   

Global Temporary Tables

Database tables in ABAP Dictionary can be defined using the table category [global temporary table](javascript:call_link\('abenddic_database_tables_gtt.htm'\)). A global temporary table (GTT) can only be filled with temporary data during a database LUW. When a GTT is filled using ABAP SQL, it must be emptied again explicitly before the next implicit database commit. If not, a non-handleable exception is raised.

Modification 3   

Replacement Objects

A CDS can be assigned as a [replacement object](javascript:call_link\('abenddic_replacement_objects.htm'\)) to a transparent database table or a classic database view. In ABAP SQL reads, the replacement object is then accessed instead of the original object.

Modification 4   

Value Ranges of Domains

When the [value range of a domain](javascript:call_link\('abenddic_domains_sema.htm'\)) is defined, the data types INT1, INT2, and INT4 are now checked (like INT8) to determine whether the fixed values and interval boundaries are valid values, that is, that they lie within the [value range](javascript:call_link\('abenddic_builtin_types.htm'\)) defined by the technical properties. Existing domains with invalid value ranges must be corrected.