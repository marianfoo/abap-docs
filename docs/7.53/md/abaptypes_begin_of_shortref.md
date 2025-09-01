  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  T

TYPES BEGIN OF - Quick reference

[Reference](javascript:call_link\('abaptypes_struc.htm'\))

Syntax

TYPES BEGIN OF struc\_type.
  ...
  TYPES   ... *\[*BOXED*\]*.
  [INCLUDE ...](javascript:call_link\('abapinclude_type_shortref.htm'\))
  ...
DATA END OF struc\_type.

Effect

Defines a structured data type struc\_type, whose components can be defined by any TYPES statements or copied by INCLUDE from other structures.

Addition

-   [BOXED](javascript:call_link\('abaptypes_boxed.htm'\))
    Declares a substructure as a static [boxed component](javascript:call_link\('abenstatic_box_glosry.htm'\) "Glossary Entry").