  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentypes_and_objects.htm) →  [Declaring Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobjects_statements.htm) →  [DATA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata.htm) →  [DATA, BEGIN OF struc](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata_struc.htm) → 

Declaration of a Nested Structure

This example demonstrates the declaration of a nested structure with substructures.

Source Code

REPORT demo\_nested\_structure.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:
      BEGIN OF address,
        BEGIN OF name,
          title   TYPE string VALUE \`Mr.\`,
          prename TYPE string VALUE \`Duncan\`,
          surname TYPE string VALUE \`Pea\`,
        END OF name,
        BEGIN OF street,
          name   TYPE string VALUE \`Vegetable Lane\`,
          number TYPE string VALUE \`11\`,
        END OF street,
        BEGIN OF city,
          zipcode TYPE string VALUE \`349875\`,
          name    TYPE string VALUE \`Botanica\`,
        END OF city,
      END OF address.
    cl\_demo\_output=>new(
      )->write( address-name
      )->write( address-street
      )->write( address-city
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Declaration of a nested local structure address with three structured components. When the method DISPLAY of class CL\_DEMO\_OUTPUT is called, each substructure is addressed using the structure component selector (\-).