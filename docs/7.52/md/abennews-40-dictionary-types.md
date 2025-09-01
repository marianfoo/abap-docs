  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-4.htm) →  [Changes in Releases 4.0 and 4.5](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-40.htm) → 

Data Types in the ABAP Dictionary for Release 4.0

General

Up until now the administration and maintenance of data types in the ABAP programming language and in the ABAP Dictionary were not unified.

For Release 3.0 the type concept in the ABAP programming language has been greatly enhanced. Elementary and structured data types can now be independently defined. Structured data types can be further subdivided into structures and internal tables. Structure components and internal table line types can take on any data type desired, which makes the definition of extremely complex data types possible. However, if you completely split a complex data type into its component parts, you should always end up with elementary ABAP data types.

ABAP data types and Dictionary data types previously only genuinely corresponded to one another if they were structures with elementary components. The ABAP data type 'structure' corresponded to the structure of database tables in the Dictionary and the structure of independent structures. From ABAP programs you could refer to database tables and Dictionary structures using the LIKE addition and also refer to individual components of ABAP Dictionary types at the same time. However, complex ABAP data types like internal tables or non-elementary structures had no direct equivalent in the Dictionary. From Release 3.0 type groups based on include technology were put at the user's disposal as a sort of temporary solution. These type groups allowed the user to store ABAP data types centrally in the Dictionary.

Description of functionality

The following sections describe which Dictionary data types correspond to individual ABAP dtat types and how they are addressed in ABAP:

Elementary Types

Elementary data types in ABAP correspond to the data elements that were up to now only found in the ABAP Dictionary. From Release 4.5A data elements will also be called elementary types in the Dictionary. For the time being, the two-tiered domain concept for elementary types will retain its validity. The actual elementary Dictionary data type contains the semantic attributes, while the technical attributes are defined in a domain. You can refer to elementary types and previous Dictionary data elements directly in ABAP programs using the addition TYPE. When you use TYPE all external Dictionary data types are converted into their corresponding ABAP data types. Elementary types are the smallest indivisible units of those structured types and table types listed below. Thus all Dictionary types contain semantic attributes such as texts, value tables, and documentation.

Structured types

Structures in ABAP correspond to the structures that up to now were only found in the ABAP Dictionary. From Release 4.5A structures in the Dictionary will be called structured types. Individual structured type components can take any Dictionary data type you want starting from Release 4.5A. This makes complex structure construction possible. You can use the addition TYPE to refer to structured types in ABAP programs. For reasons of compatibility you will still be able to use the addition LIKE to refer to structured types.

Table types

From Release 4.5A table types can be defined in the Dictionary. Table type specifications correspond to internal tables in ABAP, that is they have an access type, a key, and a line type. Line types can be of any Dictionary data type desired, which makes complex nested table creation possible. You can use the addition TYPE to refer to table types in ABAP programs.

Database tables

In addition to managing data types centrally, the most important task of the ABAP Dictionary is still database table administration. The Dictionary describes from which elementary types the structured type of a database table's data record has been constructed. As in the past, you will still be able to use the addition LIKE in ABAP to refer to the structure of database tables and of individual data fields. From 4.5A you will also be able to use TYPE refer to the structure and fields of database tables.

What's next?

In the future, SAP plans to allow for the central definition of constants in the ABAP Dictionary, a process which, at this time, can only be undertaken with the aid of type groups. Additionally, a

comprehensive bundling concept will make type group encapsulation generally available throughout the system.