  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Releases 4.xx](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-4.htm) →  [Changes in Release 4.6A](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-46a.htm) → 

Named Includes in Release 4.6A

The statements [INCLUDE STRUCTURE rec.](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinclude_type.htm) and [INCLUDE TYPE type.](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinclude_type.htm) were enhanced so that symbolic accesses to groups of fields in structures are possible.

Variants:

-   The addition AS name causes the components of a type or structure included using INCLUDE to be accessed as a whole under the alias name.
    
-   The addition RENAMING WITH SUFFIX suff renames the component names by appending the ID suff. The structure type can then be included more than once.
    

Advantages:

-   [Flat](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_glosry.htm "Glossary Entry") structures and hierarchy views can be defined simultaneously.
    
-   There are no problems in [alignment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenalignment_glosry.htm "Glossary Entry") because the flat structure is aligned automatically so that it can carry the hierarchical structure.
    
-   Flat and hierarchical views use the same memory, so that no exchange between the different memory areas is necessary.
    
-   Existing structures can be enhanced compatibly and are integrated in full into ABAP Dictionary.