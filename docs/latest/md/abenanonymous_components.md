---
title: "Anonymous Components"
description: |
  Obsolete Syntax DATA: BEGIN OF struc, ... '...', ... space(len) TYPE c, ... END OF struc. Effect If text field literals(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_field_literal_glosry.htm 'Glossary Entry') or the constant space(https://help.sap.com/doc/abapd
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenanonymous_components.htm"
abapFile: "abenanonymous_components.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenanonymous", "components"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobsolete_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_data_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Anonymous%20Components%2C%20ABENANONYMOUS_COMPONENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

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

If [text field literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_field_literal_glosry.htm "Glossary Entry") or the constant [space](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenspace.htm) (the latter also with a length specified in parentheses) are specified within the [definition of a structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata_struc.htm) using DATA, CONSTANTS, or STATICS, nameless text fields are included at this position as anonymous components. For literals, the initial value and the length of these components are based on their content. If space is specified, a text field filled with blanks is created. These anonymous text fields cannot be addressed explicitly in programs. In particular, structures never contain components with the name space. Anonymous components can only be accessed using the structure name and the corresponding offset/length specifications.

Hints

-   Anonymous components must not be specified in classes or interfaces.
-   These anonymous components can be replaced easily by named components. Named components enhance the functions of anonymous components by allowing them to be accessed explicitly, without limiting their role as, for example, filler fields.