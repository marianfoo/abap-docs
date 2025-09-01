  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Declarations](javascript:call_link\('abenobsolete_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_data_obsolete.htm'\)) → 

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

If [text field literals](javascript:call_link\('abentext_field_literal_glosry.htm'\) "Glossary Entry") or the constant [space](javascript:call_link\('abenspace.htm'\)) (the latter also with a length specified in parentheses) are specified within the [definition of a structure](javascript:call_link\('abapdata_struc.htm'\)) using DATA, CONSTANTS, or STATICS, nameless text fields are included at this position as anonymous components. For literals, the initial value and the length of these components are based on their content. If space is specified, a text field filled with blanks is created. These anonymous text fields cannot be addressed explicitly in programs. In particular, structures never contain components with the name space. Anonymous components can only be accessed using the structure name and the corresponding offset/length specifications.

Hints

-   Anonymous components must not be specified in classes or interfaces.
-   These anonymous components can be replaced easily by named components. Named components enhance the functions of anonymous components by allowing them to be accessed explicitly, without limiting their role as, for example, filler fields.