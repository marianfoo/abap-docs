  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_views.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Naming%20Rules%20for%20DDIC%20Views%2C%20ABENDDIC_VIEW_NAMES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Naming Rules for DDIC Views

The name of a view defined in the ABAP Dictionary must comply to the following rules:

-   It can have a maximum of 16 characters.
-   It must follow the [naming rules for DDIC types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_types_names.htm),
-   It must follow the special [naming rules for DDIC structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_names.htm), with the exception, that it can always contain an underscore (\_) at the second or third position.
-   It is located in the namespace of the [data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) in ABAP Dictionary and by that the namespace of all [global types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP.