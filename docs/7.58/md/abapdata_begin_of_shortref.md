  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  D

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DATA%20BEGIN%20OF%2C%20ABAPDATA_BEGIN_OF_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DATA BEGIN OF - Short Reference

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
    Obsolete: Creates an internal table with a structured line type, [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry"), a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"), and [initial memory requirement](javascript:call_link\('abeninitial_mem_req_glosry.htm'\) "Glossary Entry") n.
-   [VALID BETWEEN intlim1 AND intlim2](javascript:call_link\('abapdata_begin_of_occurs.htm'\))
    Obsolete: Defines the columns intlim1 and intlim2 in an internal table, created using OCCURS, as interval limits for the obsolete short form of [PROVIDE](javascript:call_link\('abapprovide_obsolete.htm'\)).