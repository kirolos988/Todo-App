import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

const Tododetails = ({route})=>{
    const params = useRoute().params
    return(
        <View>
            {params && (
                <>
                    <Text>{params.title}</Text>
                    <Text>{params.description}</Text>
                </>
            )}
        </View>
    )
}

export default Tododetails