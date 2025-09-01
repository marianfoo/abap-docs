  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  E

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ENHANCEMENT-SECTION, ABAPENHANCEMENT-SECTION_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

ENHANCEMENT-SECTION - Short Reference

[Reference](javascript:call_link\('abapenhancement-section.htm'\))

Syntax

ENHANCEMENT-SECTION enh\_id SPOTS spot1 spot2 ...
                    *\[*STATIC*\]*
                    *\[*INCLUDE BOUND*\]*.
  ...
END-ENHANCEMENT-SECTION.

Effect

Defines a section of the source code as an [enhancement point](javascript:call_link\('abenenhancement_point_glosry.htm'\) "Glossary Entry") with the ID enh\_id for a [source code enhancement](javascript:call_link\('abensource_code_enhancement_glosry.htm'\) "Glossary Entry") using a [source code plug-in](javascript:call_link\('abensource_code_plugin_glosry.htm'\) "Glossary Entry") and assigns it to [simple enhancement spots](javascript:call_link\('abensimple_enhancement_spot_glosry.htm'\) "Glossary Entry") spot1, spot2, ...

Additions   

-   STATIC
    Defines a static source code enhancement.
-   INCLUDE BOUND
    Binds the source code enhancement to the current include program.