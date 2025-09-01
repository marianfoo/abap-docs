  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  D

DATA BEGIN OF - Quick reference

[Reference](javascript:call_link\('abapdata_struc.htm'\))

Syntax

DATA BEGIN OF struc *\[*READ-ONLY*\]* *\[*OCCURS n*\]*.
  ...
  [INCLUDE ...](javascript:call_link\('abapinclude_type_shortref.htm'\))
  ...
DATA END OF struc *\[*VALID BETWEEN intlim1 AND intlim2*\]*.

Effect

Declares a data object or instance attribute struc. This variant of the statement DATA creates a structure whose components can be declared using any DATA statements or adopted from other structures using INCLUDE.

Additions

-   [READ-ONLY](javascript:call_link\('abapdata_options.htm'\))
    Protects a non-private structure against writes from outside its own class.
    

-   [OCCURS n](javascript:call_link\('abapdata_begin_of_occurs.htm'\))
    Obsolete: Creates an internal table with a structured line type, [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry"), a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"), and initial memory requirement n.
    

-   [VALID BETWEEN intlim1 AND intlim2](javascript:call_link\('abapdata_begin_of_occurs.htm'\))
    Obsolete: Defines the columns intlim1 and intlim2 in an internal table, created using OCCURS, as interval limits for the obsolete short form of [PROVIDE](javascript:call_link\('abapprovide_obsolete.htm'\)).