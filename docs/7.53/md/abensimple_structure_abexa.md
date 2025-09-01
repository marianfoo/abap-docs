  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) →  [DATA](javascript:call_link\('abapdata.htm'\)) →  [DATA - BEGIN OF struc](javascript:call_link\('abapdata_struc.htm'\)) → 

Declaration of a Simple Structure

This example demonstrates the declaration of a simple structure.

Source Code

REPORT demo\_simple\_structure.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:
      BEGIN OF address,
        name   TYPE string VALUE \`Mr. Duncan Pea\`,
        street TYPE string VALUE \`Vegetable Lane 11\`,
        city   TYPE string VALUE \`349875 Botanica\`,
      END OF address.
    cl\_demo\_output=>display( address ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Declaration of a simple local structure address with three elementary components to which start values are assigned. When the method DISPLAY of class CL\_DEMO\_OUTPUT is called, the whole structure is addressed.