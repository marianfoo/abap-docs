  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-75.htm) →  [News for ABAP Release 7.56](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-756.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Assignments%20in%20ABAP%20Release%207.56%2C%20ABENNEWS-756-ASSIGNMENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Assignments in ABAP Release 7.56

[1\. New Additions for MOVE-CORRESPONDING](#!ABAP_MODIFICATION_1@1@)
[2\. New Additions for the Component Operator CORRESPONDING](#!ABAP_MODIFICATION_2@2@)
[3\. New Parameter for CL\_ABAP\_CORRESPONDING=>EXECUTE](#!ABAP_MODIFICATION_3@3@)

Modification 1   

New Additions for MOVE-CORRESPONDING

It is now possible to specify [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmove-corresponding.htm) statements with the following additions in the context of nested tables in [deep structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeep_structure_glosry.htm "Glossary Entry"). Both ensure that nested tables of the deep target structures are not deleted and new lines of nested tables in deep source structures are added:

-   [KEEPING TARGET LINES](abapmove-corresponding.htm#!ABAP_ADDITION_3@3@)
-   [EXPANDING NESTED TABLES KEEPING TARGET LINES](abapmove-corresponding.htm#!ABAP_ADDITION_2@2@)

Modification 2   

New Additions for the Component Operator CORRESPONDING

It is now possible to specify statements with the component operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expr_corresponding.htm) with the following additions in the context of nested tables in [deep structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeep_structure_glosry.htm "Glossary Entry"). Both ensure that the nested tables of deep target structures are not deleted and new lines of nested tables in deep source structures are added:

-   [APPENDING BASE](abencorresponding_constr_arg_type.htm#!ABAP_ADDITION_2@2@)
-   [DEEP APPENDING BASE](abencorresponding_constr_arg_type.htm#!ABAP_ADDITION_3@3@)

Modification 3   

New Parameter for CL\_ABAP\_CORRESPONDING=>EXECUTE

The method EXECUTE of the system class [CL\_ABAP\_CORRESPONDING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_corresponding.htm) has a new parameter KEEPING\_LINES. It has the same effect as the additions KEEPING TARGET LINES in MOVE-CORRESPONDING or BASE in CORRESPONDING.