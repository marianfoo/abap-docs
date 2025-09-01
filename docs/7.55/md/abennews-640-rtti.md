  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-6.htm) →  [Changes in Release 6.40](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-640.htm) → 

Runtime Type Services in Release 6.40

The [runtime type services (RTTS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrun_time_type_services_glosry.htm "Glossary Entry") are a further development of the former [runtime type identification (RTTI)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry"). With the enhancement of the [type description classes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentype_class_glosry.htm "Glossary Entry") to include methods for creating dynamic types (see modification 1), the RTTS include (from Release 6.40) the RTTI and also runtime type creation (RTTC).

[1\. Methods for creating data types](#!ABAP_MODIFICATION_1@1@)
[2\. New methods for types from ABAP Dictionary](#!ABAP_MODIFICATION_2@2@)
[3\. Enhancement of the method GET\_COMPONENT\_TYPE](#!ABAP_MODIFICATION_3@3@)
[4\. Enhancement of the method GET\_PROPERTY](#!ABAP_MODIFICATION_4@4@)
[5\. New method HAS\_PROPERTY](#!ABAP_MODIFICATION_5@5@)
[6\. New method GET\_CLASS\_NAME](#!ABAP_MODIFICATION_6@6@)
[7\. New method GET\_DATA\_TYPE\_KIND](#!ABAP_MODIFICATION_7@7@)

Modification 1

Methods for Creating Data Types

The type description classes of RTTI were enhanced using [RTTC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrun_time_type_creation_glosry.htm "Glossary Entry") methods. These methods create type description objects independently of existing types. This means what was previously RTTI becomes the [RTTS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrun_time_type_services_glosry.htm "Glossary Entry").

Together with the addition HANDLE of the statements [CREATE DATA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_data_handle.htm) and [ASSIGN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapassign_casting.htm), the RTTC-specific methods of the RTTS allow the construction of data objects of any types for the program runtime and the [casting](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencast_casting_glosry.htm "Glossary Entry") of dynamic types.

The most important new methods for dynamically defining data types are:

-   GET\_C, GET\_D, GET\_F, and so on of class CL\_ABAP\_ELEMDESCR for creating type description objects for elementary data types.

-   CREATE of class CL\_ABAP\_STRUCTDESCR for creating type description objects for structured data types based on a component table.

-   CREATE of class CL\_ABAP\_TABLEDESCR for creating type description objects for table types, where the attributes of the table are passed to the input parameters.

-   CREATE of class CL\_ABAP\_REFDESCR for creating type description objects for reference types, where the static type is passed to an input parameter.
    

Modification 2

New Methods for Types from ABAP Dictionary

If the type of a type description object comes from ABAP Dictionary, the dictionary attributes of the type can be identified using the following methods:

For any data types

-   CL\_ABAP\_TYPEDESCR=>IS\_DDIC\_TYPE
    returns abap\_true when the object describes a type from ABAP Dictionary

-   CL\_ABAP\_TYPEDESCR=>ABSOLUTE\_NAME
    returns the absolute name of a type (also for program-defined types)

-   CL\_ABAP\_TYPEDESCR=>GET\_DDIC\_HEADER
    returns the [nametab header](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenname_tab_header_glosry.htm "Glossary Entry") of a type from ABAP Dictionary

-   CL\_ABAP\_TYPEDESCR=>GET\_DDIC\_OBJECT
    returns the [nametab field descriptions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenname_tab_fields_glosry.htm "Glossary Entry") of a type from ABAP Dictionary

For elementary data types

-   CL\_ABAP\_ELEMDESCR=>GET\_DDIC\_FIELD
    returns the attributes of the data element and its texts (replaces function module DDIF\_FIELDINFO\_GET)

-   CL\_ABAP\_ELEMDESCR=>GET\_DDIC\_FIXED\_VALUES
    returns the [fixed values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfixed_value_glosry.htm "Glossary Entry") of the data element

For structures and database tables

-   CL\_ABAP\_STRUCTDESCR=>GET\_DDIC\_FIELD\_LIST
    returns the features of the structure and its texts (replaces function module DDIF\_FIELDINFO\_GET)
    

Modification 3

Enhancement of the Method GET\_COMPONENT\_TYPE

Previously, the method GET\_COMPONENT\_TYPE of class CL\_ABAP\_STRUCTDESCR for parameter P\_NAME only accepted actual parameters of types string and c. Although the formal parameter is type any, during the call, a type check was executed that caused a serious error for non-text-like actual parameters. Actual parameters of type csequence and numeric are now accepted. A text-like parameter is interpreted as a component name, a numeric parameter as the position of the component in the structure. An actual parameter that does not apply to csequence or numeric raises the non-class-based exception UNSUPPORTED\_INPUT\_TYPE.

Modification 4

Enhancement of the Method GET\_PROPERTY

A new public constant CL\_ABAP\_TYPEDESCR=>TYPEPROPKIND\_HASCLIENT has been introduced. If this constant of method GET\_PROPERTY is passed to class CL\_ABAP\_TYPEDESCR, the system checks whether the type of the type description object has a client field. A reference to a data object of type abap\_bool is always returned. If the type has a client field, the referenced data object has the value of the constant abap\_true. If the type does not have a client field or if it does not affect a structure, the referenced data object has the value of the constant abap\_false .

Modification 5

New Method HAS\_PROPERTY

A new public method HAS\_PROPERTY has been introduced in class CL\_ABAP\_TYPEDESCR. Unlike GET\_PROPERTY, this method only identifies whether a type has a property and only returns the values from abap\_true or abap\_false.

Modification 6

New Method GET\_CLASS\_NAME

A new public method GET\_CLASS\_NAME has been introduced in class CL\_ABAP\_CLASSDESCR. This method returns the name of the class of an object.

Modification 7

New Method GET\_DATA\_TYPE\_KIND

A new public method GET\_DATA\_TYPE\_KIND has been introduced in class CL\_ABAP\_DATADESCR. This method returns the same values as the statement [DESCRIBE FIELD](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_field.htm) with the addition TYPE. These values are also defined as constants with the prefix TYPE\_KIND\_ of class CL\_ABAP\_DATADESCR.