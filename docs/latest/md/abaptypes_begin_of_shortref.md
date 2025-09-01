  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  T

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%20BEGIN%20OF%2C%20ABAPTYPES_BEGIN_OF_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES BEGIN OF - Short Reference

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