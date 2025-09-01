---
title: "Anonymous Components"
description: |
  Obsolete Syntax DATA: BEGIN OF struc, ... '...', ... space(len) TYPE c, ... END OF struc. Effect If text field literals(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_field_literal_glosry.htm 'Glossary Entry') or the constant space(https://help.sap.com/doc/abapdocu_7
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenanonymous_components.htm"
abapFile: "abenanonymous_components.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenanonymous", "components"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobsolete_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentypes_data_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Anonymous Components, ABENANONYMOUS_COMPONENTS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

Anonymous Components

Obsolete Syntax

DATA: BEGIN OF struc,
        ...
        '...',
        ...
        space(len) *\[*TYPE c*\]*,
        ...
      END OF struc.

Effect

If [text field literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_field_literal_glosry.htm "Glossary Entry") or the constant [space](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenspace.htm) (the latter also with a length specified in parentheses) are specified within the [definition of a structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdata_struc.htm) using DATA, CONSTANTS, or STATICS, nameless text fields are included at this position as anonymous components. For literals, the initial value and the length of these components are based on their content. If space is specified, a text field filled with blanks is created. These anonymous text fields cannot be addressed explicitly in programs. In particular, structures never contain components with the name space. Anonymous components can only be accessed using the structure name and the corresponding offset/length specifications.

Hints

-   Anonymous components must not be specified in classes or interfaces.
-   These anonymous components can be replaced easily by named components. Named components enhance the functions of anonymous components by allowing them to be accessed explicitly, without limiting their role as, for example, filler fields.