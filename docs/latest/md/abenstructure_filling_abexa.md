---
title: "Filling a Structure"
description: |
  The example demonstrates the filling of a nested structure. Source Code  Public class definition CLASS cl_demo_structure_filling DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. TYPES: BEGIN OF name_type, title   TYPE string, prenam
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstructure_filling_abexa.htm"
abapFile: "abenstructure_filling_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "types", "abenstructure", "filling", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_and_objects.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_objects.htm) →  [Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_objects_structure.htm) →  [Examples of Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstructure_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Filling%20a%20Structure%2C%20ABENSTRUCTURE_FILLING_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Filling a Structure

The example demonstrates the filling of a nested structure.

Source Code   

\* Public class definition
CLASS cl\_demo\_structure\_filling DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    TYPES:
      BEGIN OF name\_type,
        title   TYPE string,
        prename TYPE string,
        surname TYPE string,
      END OF name\_type,
      BEGIN OF street\_type,
        name   TYPE string,
        number TYPE string,
      END OF street\_type,
      BEGIN OF city\_type,
        zipcode TYPE string,
        name    TYPE string,
      END OF city\_type,
      BEGIN OF address\_type,
        name   TYPE name\_type,
        street TYPE street\_type,
        city   TYPE city\_type,
      END OF address\_type.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_structure\_filling IMPLEMENTATION.
  METHOD main.
    DATA: name TYPE name\_type,
          addr TYPE address\_type.
    name-title   = \`Mr.\`.
    name-prename = \`Duncan\`.
    name-surname = \`Pea\`.
    addr-name = name.
    addr-street-name   = \`Vegetable Lane\`.
    addr-street-number = \`11\`.
    addr-city-zipcode = \`349875\`.
    addr-city-name    = \`Botanica\`.
    FINAL(address) =
      VALUE address\_type(
        name-title   = \`Mr.\`
        name-prename = \`Duncan\`
        name-surname = \`Pea\`
        street = VALUE #( name   = \`Vegetable Lane\`
                          number = \`11\` )
        city   = VALUE #( zipcode = \`349875\`
                          name    = \`Botanica\` ) ).
    ASSERT address = addr.
    out->write( address ).
  ENDMETHOD.
ENDCLASS.

Description   

In this example, the structure from the executable example [Declaring a Nested Structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennested_structure_abexa.htm) is defined with [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_struc.htm) as the data type address\_type and used for the data objects addr and address. A separate structure type is also defined for each of the substructures.

If a structure is declared with the statement DATA by reference to a structure type as shown here, the addition [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_options.htm) cannot be used. Instead, the structure must be filled by accessing the components. In particular, this also applies to the frequently occurring reference to structures of the ABAP Dictionary. There are mainly two ways for doing this:

-   In the first part of the method main, the structure addr is filled using the structure component selector. The component name is assigned a prefilled structure. In the components street and city, the components that are nested there are accessed.
-   In the second part of the method main, the structure address is filled with the value operator [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_value.htm), but the structure itself is created using an inline declaration. The parentheses after VALUE show different options for accessing the components of substructures. Either the structure component selector is used again in the same way as for the substructure name, or additional VALUE operators are nested, such as for street and city.

The content of both structures is the same. The value operator VALUE represents the modern way, where the need of expressing all the component names explicitly is replaced by the use of parentheses.