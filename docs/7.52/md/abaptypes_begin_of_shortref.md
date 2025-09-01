  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  T

TYPES BEGIN OF - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_struc.htm)

Syntax

TYPES BEGIN OF struc\_type.
  ...
  TYPES   ... *\[*BOXED*\]*.
  [INCLUDE ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinclude_type_shortref.htm)
  ...
DATA END OF struc\_type.

Effect

Defines a structured data type struc\_type, whose components can be defined by any TYPES statements or copied by INCLUDE from other structures.

Addition

-   [BOXED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_boxed.htm)
    Declares a substructure as a [static boxed component](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_box_glosry.htm "Glossary Entry").