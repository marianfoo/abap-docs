  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobsolete_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_data_obsolete.htm) → 

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

If [text field literals](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_field_literal_glosry.htm "Glossary Entry") or the constant [space](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenspace.htm) (the latter also with a length specified in parentheses) are specified within the [definition of a structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_struc.htm) using DATA, CONSTANTS, or STATICS, nameless text fields are included at this position as anonymous components. For literals, the initial value and the length of these components correspond to the content. If space is specified, a text field filled with blanks is created. These anonymous text fields cannot be addressed explicitly in programs. In particular, structures never contain components with the name space. Anonymous components can only be accessed using the structure name and by specifying appropriate offsets/lengths.

Notes

-   Anonymous components must not be specified in classes or interfaces.

-   These anonymous components can be replaced easily by named components. Named components increase the function of anonymous components by allowing them to be accessed explicitly, without limiting their role as, for example, filler fields.