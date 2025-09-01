  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Modularization](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_modularization.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_modules_obsolete.htm) → 

FUNCTION - LIKE, STRUCTURE

Obsolete Syntax

...  *{*LIKE struc-comp*}* *|* *{*LIKE struc STRUCTURE struc*}* ...

Effect

Typing of interface parameters in the display of the [properties of the interface parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_parameters.htm) of a function module interface in the source code of function modules, when the type is specified using LIKE in Function Builder. Specifying the type in this way now produces a warning in Function Builder.

-   A typing using LIKE is displayed if an elementary component of a flat structure (or database table or view) [struc-comp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_structure_glosry.htm "Glossary Entry") from ABAP Dictionary is specified after LIKE in Function Builder. The typing check is the same as when specifying components after TYPE, with the exception that the [decimal places](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfractional_portion_glosry.htm "Glossary Entry") are ignored for [packed numbers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpacked_number_glosry.htm "Glossary Entry"). No types from a type group can be specified.
    
-   A typing using STRUCTURE is displayed if a flat structure (or database table) struc from ABAP Dictionary is specified after LIKE in Function Builder. This structure is then forced on the formal parameter ([casting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencast_casting_glosry.htm "Glossary Entry")), and it is possible to access the individual components. The [fragment view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") of a structured actual parameter must match that of struc (in table parameters only across the length of struc); an elementary actual parameter must be character-like and flat. No types from a type group can be specified.
    

If a component of a global program structure in the function group of a function module has exactly the same identity (structure name struc and component comp) as the component of a structure in ABAP Dictionary specified after LIKE, LIKE refers to the component of the structure defined in the function group. This produces a warning in the syntax check.

Notes

-   Use TYPE instead of LIKE in Function Builder; this is always displayed as TYPE in the source code. Furthermore, TYPE always relates to types in ABAP Dictionary and never to local types of the function group.
    
-   Formal parameters typed with STRUCTURE can usually be replaced by formal parameters typed with TYPE. If a casting is necessary, generic formal parameters should be used and assigned to field symbols using the statement [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign.htm) and the addition CASTING.