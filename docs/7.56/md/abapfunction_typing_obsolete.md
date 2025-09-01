  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Modularization](javascript:call_link\('abenobsolete_modularization.htm'\)) →  [Function Modules](javascript:call_link\('abenfunction_modules_obsolete.htm'\)) → 

FUNCTION, LIKE, STRUCTURE

Obsolete Syntax

...  *{*LIKE struc-comp*}* *|* *{*LIKE struc STRUCTURE struc*}* ...

Effect

Typing of interface parameters in the display of the [properties of the interface parameters](javascript:call_link\('abenfunction_parameters.htm'\)) of a function module interface in the source code of function modules, if the type is specified using LIKE in the Function Builder. Specifying the type in this way now produces a warning in the Function Builder.

-   A typing using LIKE is displayed if an elementary component struc-comp of a [flat DDIC structure](javascript:call_link\('abenddic_structures.htm'\)) (or DDIC database table or DDIC view) is specified after LIKE in the Function Builder. The typing check is the same as when specifying components after TYPE, with the exception that the [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry") are ignored for [packed numbers](javascript:call_link\('abenpacked_number_glosry.htm'\) "Glossary Entry"). No types from a type pool can be specified.
-   A typing using STRUCTURE is displayed if a flat DDIC structure (or DDIC database table or DDIC view) struc is specified after LIKE in the Function Builder. This structure is then applied to the formal parameter ([casting](javascript:call_link\('abencast_casting_glosry.htm'\) "Glossary Entry")), and it is possible to access the individual components. In the case of a structured actual parameter, this parameter must be at least as long as the formal parameter:
    
    -   In the case of a structured actual parameter, its [fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry") must match the fragment view of the corresponding initial part of struc.
    -   An elementary actual parameter must be character-like and flat and the corresponding initial part of struc can contain only components of this type.
    
    No types from a type pool can be specified.
    

If a component of a global program structure in the function pool of a function module has exactly the same name (structure name struc and component comp) as the component of a DDIC structure specified after LIKE, LIKE refers to the component of the structure defined in the function pool. This leads to a warning in the syntax check.

Hints

-   Only TYPE should be used instead of LIKE in the Function Builder. This is always displayed as TYPE in the source code. Furthermore, TYPE always refers to types in the ABAP Dictionary and never to local types of the function pool.
-   Formal parameters typed with STRUCTURE can usually be replaced by formal parameters typed with TYPE. If a casting is necessary, generic formal parameters should be used and assigned to field symbols using the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)) and the addition CASTING.